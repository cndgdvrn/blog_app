import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import Toggle from "../toggle/Toggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="flex h-20 justify-between md:justify-normal items-center">
      <div className="hidden md:flex justify-start basis-1/3 gap-x-3 items-center">
        <BsFacebook size={18} />
        <BsInstagram size={18} />
        <BsTiktok size={18} />
        <BsYoutube size={18} />
      </div>
      <span className="flex justify-start md:justify-center items-center basis-1/3 text-3xl md:text-4xl lg:text-6xl tracking-tighter font-extrabold">
        CANBLOG
      </span>
      <div className="flex basis-1/3 justify-end items-center gap-x-3 text-lg">
        <Toggle />
        <Link href="/" className="hidden md:inline-block">
          Homepage
        </Link>
        <Link href="/" className="hidden md:inline-block">
          Contact
        </Link>
        <Link href="/" className="hidden md:inline-block">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
