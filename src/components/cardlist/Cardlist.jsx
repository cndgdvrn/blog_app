import Image from "next/image";
import CustomButton from "../button/CustomButton";
import Pagination from "../pagination/Pagination";

const Cardlist = () => {
  return (
    <div className="w-full lg:basis-2/3 ">
      <h1 className="text-3xl font-bold mb-4">Recent Posts</h1>

      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="w-full lg:w-1/2 h-80 relative">
            <Image className="object-cover" fill={true} src={"/p1.jpeg"} />
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2 flex flex-col gap-y-2">
            <div>
              11.02.2023 - <span className="text-red-500">CULTURE</span>
            </div>
            <div className="text-2xl font-extrabold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur voluptate non quia dolore corporis.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              eius aliquid consequatur dolores veritatis? Magni voluptate omnis
              sed accusantium alias animi nostrum minima cumque optio,
              laudantium quos enim nihil voluptates distinctio architecto
              asperiores ut error.
            </div>
            <div className="relative w-max">
              <button className="w-full">Read More</button>
              <div className="absolute w-full h-[2px] bg-black"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="w-full lg:w-1/2 h-80 relative">
            <Image className="object-cover" fill={true} src={"/p1.jpeg"} />
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2 flex flex-col gap-y-2">
            <div>
              11.02.2023 - <span className="text-red-500">CULTURE</span>
            </div>
            <div className="text-2xl font-extrabold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur voluptate non quia dolore corporis.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              eius aliquid consequatur dolores veritatis? Magni voluptate omnis
              sed accusantium alias animi nostrum minima cumque optio,
              laudantium quos enim nihil voluptates distinctio architecto
              asperiores ut error.
            </div>
            <div className="relative w-max">
              <button className="w-full">Read More</button>
              <div className="absolute w-full h-[2px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      <Pagination/>
    </div>
  );
};

export default Cardlist;
