"use client"

import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"

const CustomButton = ({children}) => {
    
    const {themeOfContext} = useContext(ThemeContext)
  
    return (
    <button className={`border-none px-2 py-1 text-sm md:p-3 md:text-base w-max rounded-md ${themeOfContext === "dark" ? "bg-themeLight text-themeDark" : "bg-themeDark text-themeLight"}`}>
        {children}
    </button>
  )
}

export default CustomButton