"use client";
import { useState } from "react";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidCloudUpload } from "react-icons/bi";
import { BsCameraVideoFill, BsFillImageFill } from "react-icons/bs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

const NewPost = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="mt-10">
      <form className="w-full flex flex-col gap-y-8">
        <div className="flex items-center gap-x-3">
          <AiOutlinePlusCircle
            className="cursor-pointer"
            size={32}
            onClick={() =>
              setIsOpen((prev) => {
                return !prev;
              })
            }
          />

          {isOpen && (
            <div className="flex items-center gap-x-3">
              <BsFillImageFill size={24} />
              <BiSolidCloudUpload size={24} />
              <BsCameraVideoFill size={24} />
            </div>
          )}
        </div>
        <div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Title"
            className="placeholder:text-4xl text-4xl outline-none p-6 border-none bg-transparent"
          />
          <div className="w-full h-[2px] bg-slate-500"></div>
        </div>
        

        <div>
          <ReactQuill
            className="text-lg"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story"
          />
          <div className="w-full h-[2px] bg-slate-500"></div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
