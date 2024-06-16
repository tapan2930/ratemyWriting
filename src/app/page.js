"use client";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import TeaxtArea from "@/components/textArea";
import UploadFile from "@/components/uploadFile";
import SectionSelector from "@/components/sectionSelector";

export default function Home() {
  const [text, setText] = useState({
    title: "",
    content: "",
  });
  const [task, setTask] = useState("task_1_general");

  const handleTextChange = (key) => (value) => {
    setText((prev) => ({ ...prev, [key]: value }));
  };

  const handleTaskSelect = (task) => {
    setTask(task);
  };

  const handleSubmit = async () => {
    getMyResult({ text, task });
  };

  return (
    <main className=" min-h-screen  py-6 container">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-headline">Rate My Writing</h1>
      </div>
      <div>
        <SectionSelector handleTaskSelect={handleTaskSelect} />
      </div>
      <div className="flex flex-col w-full mt-6 h-1/2">
        <div className="flex-grow">
          <TeaxtArea handleTextChange={handleTextChange} text={text} />
        </div>

        <div className="">
          <UploadFile handleTextChange={handleTextChange} />
        </div>
      </div>
      <div>
        <button className=" mt-10 align-middle select-none  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs text-primary-950 py-3 px-6 rounded-lg bg-gradient-to-tr from-secondary-500 to-secondary-400 text-white shadow-md shadow-secondary-500/10 hover:shadow-lg hover:shadow-secondary-500/20 active:opacity-[0.85] items-center gap-3 cursor-pointer block w-full">
          Show my writng score
        </button>
      </div>
    </main>
  );
}
