import Image from "next/image";
import Link from "next/link";
import CustomButton from "../button/CustomButton";

const Comment = () => {
  const status = "authenticated";

  return (
    <>
      {status === "authenticated" ? (
        <div>
          <form className="flex flex-col gap-y-6">
            <textarea
              className=" p-3 w-full bg-transparent outline-none border-4 border-gray-400"
              rows={3}
              placeholder="Write a comment"
            />
            <CustomButton>Send</CustomButton>
          </form>
        </div>
      ) : (
        <Link className="underline text-2xl" href={"/login"}>Login to write a comment!</Link>
      )}
    </>
  );
};

export default Comment;
