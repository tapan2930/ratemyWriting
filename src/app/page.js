"use client";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import TeaxtArea from "@/components/textArea";
import UploadFile from "@/components/uploadFile";
import SectionSelector from "@/components/sectionSelector";
import { getMyResult } from "@/apis/getMyResult";
import ShowResult from "@/components/showResult";
import NavigationBar from "@/components/navigationBar";
import Hero from "@/components/sections/hero";
import Main from "@/components/sections/main";
import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
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
    <main className=" min-h-screen">
      <ThemeProvider>
        <Hero />
        <Main />
      </ThemeProvider>
    </main>
  );
}
