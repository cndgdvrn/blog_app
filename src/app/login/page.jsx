"use client";
import { signIn, useSession } from "next-auth/react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

const Login = () => {
  const {data:session,status} = useSession();


  return (
    <div className="w-1/2 mx-auto">
      <div className="flex flex-col gap-y-4 items-center p-0 sm:p-12 md:p-18 ">
        <button
          onClick={() => signIn("google")}
          className="flex items-center gap-x-2 px-2 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 bg-red-400 w-full justify-center">
          <p className="text-base md:text-lg lg:text-xl">Login with Google</p>
          <BsGoogle size={20} />
        </button>
        <button className="flex items-center gap-x-2 px-2 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 bg-slate-800 w-full justify-center">
          <p className="text-base md:text-lg lg:text-xl">Login with Github</p>
          <BsGithub size={20} />
        </button>
        <button className="flex items-center gap-x-2 px-2 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 bg-blue-600 w-full justify-center">
          <p className="text-base md:text-lg lg:text-xl">Login with Facebook</p>
          <BsFacebook size={20} />
        </button>
      </div>
    </div>
  );
};

export default Login;
