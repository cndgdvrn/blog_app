import CustomButton from "@/components/button/CustomButton";
import Comment from "@/components/comment/Comment";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";

const Page = ({params}) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-10">
        <div className="w-full md:basis-1/2 gap-y-4 md:gap-y-0 flex flex-col justify-around">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <div className="flex items-center gap-x-4">
            <div className="w-10 h-10 rounded-full relative">
              <Image src={"/logo.png"} fill={true} className="object-cover" />
            </div>
            <div className="flex flex-col justify-center gap-x-2">
              <span>Can Dagdeviren</span>
              <span>20 January 2023</span>
            </div>
          </div>
        </div>

        <div className="w-full relative md:basis-1/2 h-80 ">
          <Image src={"/p1.jpeg"} className="object-cover" fill={true} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-x-10 mt-8">
        {/* POST AND COMMENTS*/}
        <div className="basis-2/3 flex flex-col gap-y-8">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            delectus necessitatibus totam minus illo sint nulla debitis tempora,
            tenetur accusamus nesciunt iure aliquid minima voluptatem enim
            assumenda molestiae quidem dolorem? Neque ipsam voluptatibus rem
            minima assumenda. Sint eligendi iure ex, magnam fuga, laudantium sed
            nihil officiis placeat, rem mollitia optio? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quod, delectus necessitatibus
            totam minus illo sint nulla debitis tempora, tenetur accusamus
            nesciunt iure aliquid minima voluptatem enim assumenda molestiae
            quidem dolorem? Neque ipsam voluptatibus rem minima assumenda. Sint
            eligendi iure ex, magnam fuga, laudantium sed nihil officiis
            placeat, rem mollitia optio? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quod, delectus necessitatibus totam minus illo
            sint nulla debitis tempora, tenetur accusamus nesciunt iure aliquid
            minima voluptatem enim assumenda molestiae quidem dolorem? Neque
            ipsam voluptatibus rem minima assumenda. Sint eligendi iure ex,
            magnam fuga, laudantium sed nihil officiis placeat, rem mollitia
            optio?
          </p>

          <h2 className="font-bold text-3xl">Comments</h2>

          <Comment />

          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <div className="w-10 h-10 rounded-full relative">
                <Image src={"/logo.png"} fill={true} className="object-cover" />
              </div>
              <div className="flex flex-col justify-center gap-x-2">
                <span>Can Dagdeviren</span>
                <span>20 January 2023</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus, aperiam.
            </p>
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default Page;
