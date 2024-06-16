import ReactMarkdown from "react-markdown";

const ShowResult = ({ result }) => {
  const resultData = JSON.parse(result);
  // console.log("reeeeeeeeeee", resultData);
  const renderObject = () => {};
  return (
    <section className="mt-10">
      <div>
        <div className="flex flex-col w-full mt-6 h-1/2">
          <div className="flex-grow">
            <div className="text-md font-normal text-paragrapgh">
              <span className="text-secondary-500 capitalize text-xl font-bold ">
                Your result:
              </span>

              <div className="text-sm">
                {Object?.keys(resultData).map((key) => {
                  if (typeof resultData[key] === "object") {
                    return (
                      <div className="my-2">
                        <span className="text-secondary-500 font-semibold capitalize  ">
                          {key.split("_").join(" ")}:
                        </span>

                        {Object?.keys(resultData[key]).map((subKey) => {
                          return (
                            <div className="ml-6  my-2">
                              <span className="text-secondary-500 font-semibold capitalize ">
                                {subKey.split("_").join(" ")}:{" "}
                              </span>
                              {resultData[key][subKey]}
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                  return (
                    <div className="my-2">
                      <span className="text-secondary-500 font-semibold capitalize  ">
                        {key}:
                      </span>{" "}
                      {resultData[key]}
                    </div>
                  );
                })}
              </div>

              {/* {result?.split("\n\n")?.map((item, index) => (
                <ReactMarkdown className=" text-sm mb-3 font-normal">
                  {item}
                </ReactMarkdown>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowResult;
