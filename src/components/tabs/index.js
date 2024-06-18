import React, { useState } from "react";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(data);
  return (
    <div className="lg:my-10">
      <div className="flex flex-col lg:flex-row">
        {data &&
          data.map((item, index) => (
            <div className="flex-1 lg:px-2  mt-6 border-r ">
              <div>
                <div className=" text-lg lg:text-2xl font-bold capitalize mb-6  relative">
                  {item.title?.split("_")?.join(" ")}

                  <div className=" absolute -bottom-2 left-0 w-20 h-1 rounded-full bg-teal-700">
                    {" "}
                  </div>
                </div>
              </div>
              <div className=" text-justify lg:text-left text-sm lg:text-base">
                {item.description}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;
