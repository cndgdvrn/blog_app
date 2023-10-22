"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Toggle = () => {

    const {toggle,themeOfContext} = useContext(ThemeContext)
    
    const handleClick = () => {
        toggle()
    }



  return (
    <div onClick={handleClick} className={`flex h-5 lg:h-7 p-1 rounded-full justify-between gap-x-4 items-center ${themeOfContext==="light" ? "bg-themeDark" : "bg-themeLight"} relative cursor-pointer`}>
      <BsSunFill size={15} className="text-yellow-500" />
      <div className={`w-4 h-4 lg:w-5 lg:h-5  rounded-full absolute ${themeOfContext==="light" ? "left-1 bg-themeLight" : "right-1 bg-themeDark"}`}></div>
      <BsMoonFill size={15} className="text-yellow-500" />
    </div>
  );
};

export default Toggle;
