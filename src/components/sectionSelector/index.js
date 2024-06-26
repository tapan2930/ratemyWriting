import React, { useState } from "react";

const SectionSelector = ({ handleTaskSelect }) => {
  const [sections, setSections] = useState([
    { name: "Task 1 (General) ", active: true, id: "task_1_general" },
    { name: "Task 1 (Acadamic)", active: false, id: "task_1_acadamic" },
    { name: "Task 2 (General)", active: false, id: "task_2_general" },
    { name: "Task 2 (Acadamic)", active: false, id: "task_2_acadamic" },
  ]);

  const handleTabClick = (selectedSection) => {
    const newSections = sections.map((section) => {
      if (section.name === selectedSection?.name) {
        return { ...section, active: true };
      }
      return { ...section, active: false };
    });
    handleTaskSelect(selectedSection?.id);
    setSections(newSections);
  };

  return (
    <div class="w-full mt-6">
      <div class="relative right-0">
        <ul
          className="relative flex flex-wrap p-1 list-none rounded-lg bg-secondary  "
          data-tabs="tabs"
          role="list"
        >
          {sections.map((section, index) => (
            <li key={index} className="z-30 flex-auto text-center">
              <a
                className={` ${
                  section?.active
                    ? " bg-headline text-secondary"
                    : " bg-secondary text-headline"
                }  z-30 flex items-center justify-center w-full px-0 py-2 mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer `}
                active={section?.active}
                role="tab"
                aria-selected={section?.active}
                onClick={() => handleTabClick(section)}
              >
                <span class="ml-1 font-bold">{section?.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionSelector;
