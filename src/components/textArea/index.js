const TeaxtArea = ({ handleTextChange, text }) => {
  return (
    <div className="h-[90%] mb-6">
      <textarea
        className="mb-3 h-[24%]  w-full  rounded-md border-[3px] border-primary-200  px-3 py-2.5  text-sm font-normal text-primary-900 outline outline-0 transition-all   placeholder-shown:border-t-primary-200 focus:border-[3px] focus:border-secondary-500  disabled:border-6 disabled:bg-primary-50"
        onChange={(e) => handleTextChange("title")(e.target.value)}
        value={text?.title}
        type="text"
        placeholder="Enter your topic here"
      />
      <div className="h-full">
        <textarea
          onChange={(e) => handleTextChange("content")(e.target.value)}
          value={text?.content}
          className=" h-[70%] min-h-[250px] w-full  rounded-md border-[3px] border-primary-200  px-3 py-2.5  text-sm font-normal text-primary-900 outline outline-0 transition-all   placeholder-shown:border-t-primary-200 focus:border-[3px] focus:border-secondary-500  disabled:border-6 disabled:bg-primary-50"
          placeholder="Enter your content here"
        ></textarea>
      </div>
    </div>
  );
};

export default TeaxtArea;
