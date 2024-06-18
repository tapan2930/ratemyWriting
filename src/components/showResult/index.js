import Tabs from "../tabs";
import { useState } from "react";

const ShowResult = ({ result }) => {
  const [activeTab, setActiveTab] = useState("Task achievement");
  const resultData = JSON.parse(result);

  const getTabsData = () => {
    const tabs = [];
    Object?.keys(resultData).map((key) => {
      if (typeof resultData[key] === "object" && key !== "score") {
        tabs.push({
          title: key,
          description: Object?.keys(resultData[key]).map((subKey) => {
            return (
              <div className="  my-2">
                <span className="text-headline font-semibold capitalize ">
                  {subKey.split("_").join(" ")}:{" "}
                </span>
                {resultData[key][subKey]}
              </div>
            );
          }),
        });
      } else {
        if (key !== "score") {
          tabs.push({
            title: key,
            description: resultData[key],
          });
        }
      }
    });
    return tabs;
  };

  const bandDescription = {
    1: {
      "Task achievement":
        "Responses of 20 words or fewer are rated at Band 1. The content is wholly unrelated to the task. Any copied rubric must be discounted.",
      "Coherence and cohesion":
        "Responses of 20 words or fewer are rated at Band 1. The writing fails to communicate any message and appears to be by a virtual non-writer.",
      "Lexical resource":
        "Responses of 20 words or fewer are rated at Band 1. No resource is apparent, except for a few isolated words.",
      "Grammatical range and accuracy":
        "Responses of 20 words or fewer are rated at Band 1. No rateable language is evident",
    },
    2: {
      "Task achievement": " The content barely relates to the task.",
      "Coherence and cohesion":
        "There is little relevant message, or the entire response may be off-topic. There is little evidence of control of organisational features.",
      "Lexical resource":
        "The resource is extremely limited with few recognisable strings, apart from memorised phrases.",
      "Grammatical range and accuracy":
        "There is little or no evidence of sentence forms (except in memorised phrases).",
    },
    3: {
      "Task achievement":
        "The response does not address the requirements of the task (possibly because of misunderstanding of the data/diagram/situation).",
      "Coherence and cohesion":
        "There is no apparent logical organisation. Ideas are discernible but difficult to relate to each other. Minimal use of sequencers or cohesive devices. Those used do not necessarily indicate a logical relationship between ideas. There is difficulty in identifying referencing.",
      "Lexical resource":
        "The resource is inadequate (which may be due to the response being significantly underlength). Possible over-dependence on input material or memorised language. Control of word choice and/or spelling is very limited, and errors predominate. These errors may severely impede meaning.",
      "Grammatical range and accuracy":
        "Sentence forms are attempted, but errors in grammar and punctuation predominate (except in memorised phrases or those taken from the input material). This prevents most meaning from coming through. Length may be insufficient to provide evidence of control of sentence forms.",
    },
    4: {
      "Task achievement":
        "The response is an attempt to address the task. (Academic) Few key features have been selected. (General Training) Not all bullet points are presented. (General Training) The purpose of the letter is not clearly explained and may be confused.The tone may be inappropriate. The format may be inappropriate. Key features/bullet points which are presented may be irrelevant, repetitive, inaccurate or inappropriate.",
      "Coherence and cohesion":
        "Information and ideas are evident but not arranged coherently, and there is no clear progression within the response. Relationships between ideas can be unclear and/or inadequately marked. There is some use of basic cohesive devices, which may be inaccurate or repetitive. There is inaccurate use or a lack of substitution or referencing.",
      "Lexical resource":
        "The resource is limited and inadequate for or unrelated to the task. Vocabulary is basic and may be used repetitively. There may be inappropriate use of lexical chunks (e.g. memorised phrases, formulaic language and/or language from the input material). Inappropriate word choice and/or errors in word formation and/or in spelling may impede meaning.",
      "Grammatical range and accuracy":
        "A very limited range of structures is used. Subordinate clauses are rare and simple sentences predominate. Some structures are produced accurately but grammatical errors are frequent and may impede meaning. Punctuation is often faulty or inadequate.",
    },
    5: {
      "Task achievement": "",
      "Coherence and cohesion": "",
      "Lexical resource": "",
      "Grammatical range and accuracy":
        "The range of structures is limited and rather repetitive. Although complex sentences are attempted, they tend to be faulty, and the greatest accuracy is achieved on simple sentences. Grammatical errors may be frequent and cause some difficulty for the reader. Punctuation may be faulty.",
    },
    6: {
      "Task achievement":
        "The response focuses on the requirements of the task and an appropriate format is used. (Academic) Key features which are selected are covered and adequately highlighted. A relevant overview is attempted. Information is appropriately selected and supported using figures/data. (General Training) All bullet points are covered and adequately highlighted. The purpose is generally clear. There may be minor inconsistencies in tone. Some irrelevant, inappropriate or inaccurate information may occur in areas of detail or when illustrating or extending the main points. Some details may be missing (or excessive) and further extension or illustration may be needed.",
      "Coherence and cohesion":
        "Information and ideas are generally arranged coherently and there is a clear overall progression. Cohesive devices are used to some good effect but cohesion within and/or between sentences may be faulty or mechanical due to misuse, overuse or omission. The use of reference and substitution may lack flexibility or clarity and result in some repetition or error.",
      "Lexical resource":
        "The resource is generally adequate and appropriate for the task. The meaning is generally clear in spite of a rather restricted range or a lack of precision in word choice. If the writer is a risk-taker, there will be a wider range of vocabulary used but higher degrees of inaccuracy or inappropriacy. There are some errors in spelling and/or word formation, but these do not impede communication.",
      "Grammatical range and accuracy":
        "A mix of simple and complex sentence forms is used but flexibility is limited. Examples of more complex structures are not marked by the same level of accuracy as in simple structures. Errors in grammar and punctuation occur, but rarely impede communication.",
    },
    7: {
      "Task achievement":
        "The response covers the requirements of the task. The content is relevant and accurate – there may be a few omissions or lapses. The format is appropriate. (Academic) Key features which are selected are covered and clearly highlighted but could be more fully or more appropriately illustrated or extended. (Academic) It presents a clear overview, the data are appropriately categorised, and main trends or differences are identified. (General Training) All bullet points are covered and clearly highlighted but could be more fully or more appropriately illustrated or extended. It presents a clear purpose. The tone is consistent and appropriate to the task. Any lapses are minimal.",
      "Coherence and cohesion":
        "Information and ideas are logically organised and there is a clear progression throughout the response. A few lapses may occur. A range of cohesive devices including reference and substitution is used flexibly but with some inaccuracies or some over/under use.",
      "Lexical resource":
        "The resource is sufficient to allow some flexibility and precision. There is some ability to use less common and/or idiomatic items. An awareness of style and collocation is evident, though inappropriacies occur. There are only a few errors in spelling and/or word formation, and they do not detract from overall clarity.",
      "Grammatical range and accuracy":
        "A variety of complex structures is used with some flexibility and accuracy. Grammar and punctuation are generally well controlled, and error-free sentences are frequent. A few errors in grammar may persist, but these do not impede communication.",
    },
    8: {
      "Task achievement": "",
      "Coherence and cohesion": "",
      "Lexical resource": "",
      "Grammatical range and accuracy":
        "A wide range of structures within the scope of the task is flexibly and accurately used. The majority of sentences are error-free, and punctuation is well managed. Occasional, non-systematic errors and inappropriacies occur, but have minimal impact on communication.",
    },
    9: {
      "Task achievement": "",
      "Coherence and cohesion": "",
      "Lexical resource": "",
      "Grammatical range and accuracy":
        "A wide range of structures within the scope of the task is used with full flexibility and control. Punctuation and grammar are used appropriately throughout. Minor errors are extremely rare and have minimal impact on communication.",
    },
  };
  return (
    <section className="py-10 mt-10 bg-secondary-500  min-h-screen">
      <div className="container">
        <div className="flex flex-col w-full mt-6 h-1/2">
          <div className="flex-grow">
            <div className="text-md font-normal text-paragrapgh">
              <span className="text-headline capitalize font-bold text-xl  lg:text-3xl ">
                Your result:
              </span>

              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div>
                  <div className="w-[calc((6*250px)/9)] lg:w-[calc((6*400px)/9)] flex justify-end items-center mb-3 font-bold text-headline">
                    <span>Score:</span>
                    <span className=" text-base lg:text-xl">
                      {resultData?.score}
                    </span>
                  </div>
                  <div className="h-[30px] w-[250px]  lg:w-[400px] bg-tertiary rounded-md ">
                    <div className=" h-[30px] w-[calc((6*250px)/9)]  lg:w-[calc((6*400px)/9)] rounded-md bg-green-400  "></div>
                  </div>
                  <div className=" w-[250px] lg:w-[400px] flex justify-between mt-3 text-xl font-bold text-headline">
                    <span>0</span>
                    <span>9</span>
                  </div>
                </div>

                <div>
                  <div class=" max-w-[550px]">
                    <h3 className=" mt-6 lg:mt-0 text-xl lg:text-2xl font-bold mb-6">
                      What does your score means ?
                    </h3>
                    <ul class="flex flex-col w-full">
                      {bandDescription[Math.floor(resultData?.score)] &&
                        Object.keys(
                          bandDescription[Math.floor(resultData?.score)]
                        ).map((key) => (
                          <li class="relative flex flex-col gap-2">
                            <div
                              onClick={() => setActiveTab(key)}
                              class="flex items-center h-3 gap-4 cursor-pointer"
                            >
                              <span class="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-1.5 text-white"></span>
                              <h6 class="block  text-base antialiased font-semibold leading-none tracking-normal text-headline">
                                {key}
                              </h6>
                            </div>
                            <div class="flex gap-4 pb-8">
                              <span class="flex-shrink-0 invisible h-full pointer-events-none"></span>
                              {activeTab === key && (
                                <div className="">
                                  <p class="block  text-sm antialiased font-normal leading-normal text-paragrapgh">
                                    {
                                      bandDescription[
                                        Math.floor(resultData?.score)
                                      ][key]
                                    }
                                  </p>
                                </div>
                              )}
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-sm">
                {/* <ReactMarkdown>{result}</ReactMarkdown> */}

                <Tabs data={getTabsData()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowResult;
