import OpenAI from "openai";
import {
  TextractClient,
  AnalyzeDocumentCommand,
} from "@aws-sdk/client-textract";

const client = new TextractClient({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

export async function POST(req, res) {
  if (req.method === "POST") {
    const body = await req.formData(); // Assuming document content is in request body
    console.log("POST request ------------", body.get("document"));
    const document = body.get("document");

    console.log("document----------------------------------", document);
    const documentIntArray = new Uint8Array(await document.arrayBuffer());
    try {
      const params = {
        Document: {
          Bytes: documentIntArray, // Replace with actual document content (e.g., buffer)
        },
        FeatureTypes: ["LAYOUT"],
      };
      const command = new AnalyzeDocumentCommand(params);
      const response = await client.send(command);

      // console.log("-------------------TTTTTTTTTTTTTTTTTTTTTTTTTT", response);

      const textAndId = response.Blocks.map((block) => ({
        text: block.Text,
        id: block.Id,
      }));

      const filteredRes = response.Blocks.filter(
        (block) => block.BlockType === "LAYOUT_TEXT"
      ).map((block) => [...block["Relationships"][0]["Ids"]]);

      console.log("filteredRes", filteredRes);

      const paragraphs = formParagrph(textAndId, filteredRes);

      return Response.json({ status: true, data: paragraphs }, { status: 200 });
    } catch (error) {
      console.error(error);

      return Response.json(
        {
          error: "Error in processing the document",
          errorCode: 1,
          status: false,
        },
        {
          status: 400,
        }
      );
    }
  } else {
    return Response.json(
      {
        error: "Method not allowed",
        errorCode: 1,
        status: false,
      },
      {
        status: 400,
      }
    );
  }
}

const formParagrph = (textAndId, filteredRes) => {
  const paragraphs = [];
  filteredRes.forEach((block) => {
    const paragraph = block.map((id) => {
      const text = textAndId.find((item) => item.id === id).text;
      return text;
    });
    paragraphs.push(paragraph.join(". "));
  });
  return paragraphs;
};
