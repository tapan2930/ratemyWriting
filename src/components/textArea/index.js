const TeaxtArea = ({ handleTextChange, text }) => {
  return (
    <div className="h-[90%] mb-6">
      <textarea
        className=" bg-primary-600 mb-3 h-[24%]  w-full  rounded-md border-[2px] border-secondary-500  px-3 py-2.5  text-sm font-normal text-paragrapgh outline outline-0 transition-all   focus:border-[2px] focus:border-secondary-900  "
        onChange={(e) => handleTextChange("title")(e.target.value)}
        value={text?.title}
        type="text"
        placeholder="Enter your topic here"
      />
      <div className="h-full">
        <textarea
          onChange={(e) => handleTextChange("content")(e.target.value)}
          value={text?.content}
          className=" bg-primary-600 h-[70%] min-h-[250px] w-full  rounded-md border-[2px] border-secondary-500  px-3 py-2.5  text-sm font-normal text-paragrapgh outline outline-0 transition-all    focus:border-[2px] focus:border-secondary-900  "
          placeholder="Enter your content here"
        ></textarea>
      </div>
    </div>
  );
};

export default TeaxtArea;
