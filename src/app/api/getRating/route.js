import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "sk-proj-PgNfBatC4Koe337F9KOxT3BlbkFJOX9UVLDjKeFyIoMf4uei",
});

export async function GET() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are an expert IELTS (International English Language Testing System) test checker. Rate the below essay on the scale of 0-9. 0 being the worst and 9 being the best.",
      },

      {
        role: "user",
        content:
          "Essay Topic: Some people think that the government should establish free libraries in each town. Others believe that it is a waste of money since people can access information using the internet. Discuss both views and give your opinion. Write at least 250 words.",
      },
      {
        role: "user",
        content:
          "Paragraph 1: Whether libraries or the internet  is  good places to gain information bears some consideration. The writer of this essay believes that it is more beneficial for the population to obtain information in  libraries due to reliable resources and fostering social communication rather than searching for details by technology.",
      },
      {
        role: "user",
        content:
          "Paragraph 2: To commence with, people should go to  public libraries to obtain high-quality materials. In other words, since the internet contain vast amounts of resources, some of which are inaccurate, people must discern between trustworthy and unreliable ones. Therefore,  libraries are  valid places for them to access mainstream books or documents that may be censored. As a result, with full prestige resources, individuals can enhance their expertise effectively while avoiding  erroneous details that could lead to gaps in their knowledge.",
      },
      {
        role: "user",
        content:
          "Paragraph 3: The internet, however, is convenient in various ways for people to gain  information. To be more specific,  people just need to stay at their living places and utilize several technological tools available such as phones, laptops or tablets to access the details, especially people who are busy with their work and do not have sufficient time to go to the libraries. Take, for example, Finland, where 27% of IELTS learners preferred to use online documents for writing because they provided flexible learning opportunities.",
      },
      {
        role: "user",
        content:
          "Paragraph 4: In the writer's opinion, going to  public libraries also improves social interaction in  society. It must be recognized that  libraries are the destinations that not only help people to acquire more knowledge but also a wide range of recreational activities for individuals to entertain  each other. Consequently, these activities  will foster interpersonal bonds and expand social circles for individuals. For instance, Ho Chi Minh International Library, which conducted 2 events every year, also assisted 3000 readers to connect with the other ones in Vietnam.",
      },
      {
        role: "user",
        content:
          "Paragraph 5: Thus, even though using online resources gives people  flexibility in obtaining  information, the provision of tailored information and enhancement of social relationships are aspects that should be given more consideration . Hence,  public libraries are more suitable for individuals to acquire knowledge.",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  return Response.json(completion.choices[0]);
}
