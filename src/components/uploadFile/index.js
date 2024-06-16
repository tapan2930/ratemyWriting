import React from "react";
import { useState } from "react";
import axios from "axios";

const UploadFile = ({ handleTextChange }) => {
  const [isUploading, setIsUploading] = useState(false);

  console.log("isUploading", isUploading);

  function handleSubmit(event) {
    const file = event.target.files[0];
    if (!file) return;
    const url = "https://api.api-ninjas.com/v1/imagetotext";
    const formData = new FormData();
    formData.append("image", file);
    const config = {
      headers: {
        "content-Type": false,
        "X-Api-Key": process.env.API_NINJA_KEY,
      },
    };
    try {
      setIsUploading(true);
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
        const text = response.data?.reduce((str, item) => {
          return str + " " + item.text;
        }, "");
        handleTextChange(text);
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsUploading(false);
    }
  }
  return (
    <div className="">
      <form className=" flex flex-col self-end " onSubmit={handleSubmit}>
        <input
          id="file"
          type="file"
          onChange={handleSubmit}
          className="hidden"
        />
        <label
          className=" self-end align-middle select-none  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs text-primary-950 py-3 px-6 rounded-lg bg-gradient-to-tr from-secondary-500 to-secondary-400 text-white shadow-md shadow-secondary-500/10 hover:shadow-lg hover:shadow-secondary-500/20 active:opacity-[0.85] flex items-center gap-3 cursor-pointer"
          for="file"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            ></path>
          </svg>
          {isUploading ? "Uploading..." : "Upload from File"}
        </label>
        <p className=" self-end text-xs mt-2">
          * You can upload from .docx or img file
        </p>
        {/* <button type="submit">Upload</button> */}
      </form>
    </div>
  );
};

export default UploadFile;
