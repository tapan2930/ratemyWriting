import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req, res) {
  const { text, task } = await req.json();
  console.log("GET request ------------", text, task);

  if (!text || !task || !text.content || !text.title) {
    return Response.json(
      {
        error: "text (title and Content) and task are required",
        errorCode: 1,
        status: false,
      },
      {
        status: 400,
      }
    );
  }

  const content = text?.content.split("\n\n");
  const title = text?.title;
  const promptBasedOnTask = getPromptBasedOnTask(task);
  const userTitleMessage = {
    role: "user",
    content: "Topic: " + title,
  };
  const userContentMessages = content.map((item, index) => ({
    role: "user",
    content: `Paragraph ${index + 1} : ${item}`,
  }));

  console.log("message", [
    {
      role: "system",
      content: promptBasedOnTask,
    },
    userTitleMessage,
    ...userContentMessages,
  ]);

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: promptBasedOnTask,
      },
      userTitleMessage,
      ...userContentMessages,
      {
        role: "user",
        content:
          "Give me result in the stringyfied json format: with key: 'score' and value: 0-9 and key: 'comment' and value: 'your comment' and key: 'suggestion' and value: 'your suggestion' and key:'paragraph_wise_suggestions",
      },
    ],
    model: "gpt-4o",
  });

  return Response.json(
    { status: true, data: completion.choices[0]?.message },
    { status: 200 }
  );
}

const getPromptBasedOnTask = (task) => {
  switch (task) {
    case "task_1_general":
      return "You are an expert IELTS (International English Language Testing System) test checker. Rate the below IELTS writing Task 1 (general) - letter on the scale of 0-9. 0 being the worst and 9 being the best.";
    case "task_1_acadamic":
      return "";
    case "task_2_general":
      return "You are an expert IELTS (International English Language Testing System) test checker. Rate the below IELTS writing Task 2 (general) - essay on the scale of 0-9. 0 being the worst and 9 being the best.";
    case "task_2_acadamic":
      return "You are an expert IELTS (International English Language Testing System) test checker. Rate the below IELTS writing Task 2 (acadamic) - essay on the scale of 0-9. 0 being the worst and 9 being the best.";
  }
};
