import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row mt-12">
      <div className="basis-3/5 flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <Image src={"/logo.png"} width={40} height={40} />
          <span className="text-2xl font-bold">Can Blog</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi
          et laudantium saepe porro deserunt accusamus magni suscipit. Quaerat,
          dignissimos quo soluta quibusdam ea ipsa voluptates dolorem laudantium
          neque reiciendis.
        </p>
        <div className="flex items-center gap-x-2">
          <BsFacebook />
          <BsInstagram />
          <BsTiktok />
          <BsYoutube />
        </div>
      </div>
      <div className="basis-2/5 grid grid-cols-3">
        <div className="flex flex-col items-start lg:items-center">
          <p className="text-lg font-bold">Links</p>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"contact"}>Contact</Link>
        </div>
        <div className="flex flex-col items-start lg:items-center">
          <p className="text-lg font-bold">Tags</p>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"contact"}>Contact</Link>
        </div>
        <div className="flex flex-col items-start lg:items-center">
          <p className="text-lg font-bold">Social</p>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
