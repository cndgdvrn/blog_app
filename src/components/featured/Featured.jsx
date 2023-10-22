import Image from "next/image";
import CustomButton from "../button/CustomButton";

const Featured = () => {
  return (
    <div className="font-mono flex flex-col gap-y-4 md:gap-y-8 mt-8 ">
      <h1 className="text-center text-4xl md:text-5xl lg:text-7xl tracking-wide md:tracking-wider">
        <span className="font-bold">Hey Can is here!! </span>
        Discover my stories and creative ideas
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0 gap-x-4 md:gap-x-8">
        <div className="relative w-full h-[276px] md:basis-1/2  md:h-[476px]">
          <Image className="object-cover" fill={true} src={"/p1.jpeg"} />
        </div>
        <div className=" flex flex-col gap-y-4 md:gap-y-8 basis-1/2">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            ullam vitae animi accusantium officiis eligendi quas eum saepe
            nesciunt sint.
          </h2>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis, ad. Soluta aspernatur odio sequi tempore in, accusantium
            porro ea odit officia explicabo facilis quam pariatur, reprehenderit
            ratione eaque veritatis eveniet nisi? Quisquam, quasi voluptate.
            Sint.
          </p>
          <CustomButton>
            Read More
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Featured;
