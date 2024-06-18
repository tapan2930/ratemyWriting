"use client";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import TeaxtArea from "@/components/textArea";
import UploadFile from "@/components/uploadFile";
import SectionSelector from "@/components/sectionSelector";
import { getMyResult } from "@/apis/getMyResult";
import ShowResult from "@/components/showResult";

export default function Main() {
  const [text, setText] = useState({
    title: "",
    content: "",
  });
  const [task, setTask] = useState("task_1_general");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleTextChange = (key) => (value) => {
    setText((prev) => ({ ...prev, [key]: value }));
  };

  const handleTaskSelect = (task) => {
    setTask(task);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const res = await getMyResult({ text, task });
    console.log(res, "dxddd");
    if (res?.status) {
      setResult(res?.data);
    } else {
      console.log("Error in getting result");
    }

    setLoading(false);
  };

  return (
    <section className=" min-h-screen my-10">
      <div className="container">
        <h1 className="font-bold text-3xl text-headline">
          Let&apos;s get started!
        </h1>
        <p className="mt-3">
          Enter your content below and get your writing score. You can also
          upload a file. Also don&apos;t forget to add the topic title/question.
          We don&apos;t store your content.
        </p>
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
          <button
            disabled={loading}
            type="button"
            data-ripple-dark="true"
            onClick={handleSubmit}
            className=" mt-10 align-middle select-none  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs text-buttonText py-3 px-6 rounded-lg bg-button  shadow-md shadow-button/10 hover:shadow-lg hover:shadow-button/20 active:opacity-[0.85] items-center gap-3 cursor-pointer block w-full"
          >
            {loading ? "Loading..." : "Show my writng score"}
          </button>
        </div>
      </div>
      <div>{result && <ShowResult result={result} />}</div>
    </section>
  );
}
