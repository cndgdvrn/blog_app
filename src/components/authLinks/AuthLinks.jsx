"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const AuthLinks = () => {
  const router = useRouter()
  const { status } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const { themeOfContext } = useContext(ThemeContext);


  if(status === "authenticated") {
    router.push("/")
    return (
      <div className="flex gap-x-3 items-center">
        <Link href={"/write"}>Write</Link>
        <button
          onClick={() => signOut()}
          className="hidden md:block bg-red-400 px-2 py-1 rounded-md">
          Logout
        </button>
      </div>
    )
  }


  return (
    <div className="flex items-center space-x-3">
      {status === "unauthenticated" && (
        <Link
          href={"/login"}
          className="hidden md:block bg-green-500 px-2 py-1 rounded-md">
          Login
        </Link>
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-y-1 items-end md:hidden cursor-pointer">
        <GiHamburgerMenu />
      </div>
      {isOpen && (
        <div
          className={`fixed z-50 top-20 right-0 w-full h-[calc(100vh-80px)] md:hidden ${
            themeOfContext === "dark"
              ? "bg-themeDark text-themeLight"
              : "bg-themeLight text-themeDark"
          } flex flex-col items-center justify-center gap-y-4 `}>
          <Link href="/" className="text-3xl">
            Homepage
          </Link>
          <Link href="/" className="text-3xl">
            Contact
          </Link>
          <Link href="/" className="text-3xl">
            About
          </Link>
          <Link href="/" className="text-3xl">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
