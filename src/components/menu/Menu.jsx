const Menu = () => {
  return (
    <div className="basis-1/3 mt-8 lg:mt-0">
      <div className="flex flex-col justify-center-center gap-x-3 mb-4">
        <span className="font-light">What's Hot</span>
        <div className="text-3xl font-bold">Most Popular</div>
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <span className="text-sm bg-orange-400 rounded-lg w-max px-2 py-1">
            Travel
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet.
          </p>
          <div className="text-sm">
            <span>John Doe </span>
            <span className="font-extralight">01.09.2023 </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="text-sm bg-orange-400 rounded-lg w-max px-2 py-1">
            Travel
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet.
          </p>
          <div className="text-sm">
            <span>John Doe </span>
            <span className="font-extralight">01.09.2023 </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="text-sm bg-orange-400 rounded-lg w-max px-2 py-1">
            Travel
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet.
          </p>
          <div className="text-sm">
            <span>John Doe </span>
            <span className="font-extralight">01.09.2023 </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="text-sm bg-orange-400 rounded-lg w-max px-2 py-1">
            Travel
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet.
          </p>
          <div className="text-sm">
            <span>John Doe </span>
            <span className="font-extralight">01.09.2023 </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <div className="flex flex-col">
          <span className="text-lg">Discover by topic</span>
          <span className="text-3xl font-bold">Categories</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="w-max bg-purple-300 rounded-lg px-6 py-1">Style</div>
          <div className="w-max bg-purple-300 rounded-lg px-6 py-1">Fashion</div>
          <div className="w-max bg-purple-300 rounded-lg px-6 py-1">Food</div>
          <div className="w-max bg-purple-300 rounded-lg px-6 py-1">Travel</div>
          <div className="w-max bg-purple-300 rounded-lg px-6 py-1">Culture</div>
          <div className="w-max bg-purple-300 rounded-lg px-6 py-1">Coding</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
