import Image from "next/image";

const Categorylist = () => {
  const categories = [
    {
      name: "style",
      path: "/style.png",
      color: "bg-red-300",
    },
    {
      name: "fashion",
      path: "/fashion.png",
      color: "bg-orange-300",
    },
    {
      name: "food",
      path: "/food.png",
      color: "bg-yellow-300",
    },
    {
      name: "travel",
      path: "/travel.png",
      color: "bg-blue-300",
    },
    {
      name: "culture",
      path: "/culture.png",
      color: "bg-green-300",
    },
    {
      name: "coding",
      path: "/coding.png",
      color: "bg-purple-300",
    },
  ];

  return (
    <div className="mt-8 grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
      {categories.map((category, i) => {
        return (
          <div key={i} className={`flex items-center px-2 py-1 gap-x-2 w-32 md:px-4 md:py-2 md:gap-x-4 md:w-40 rounded-lg ${category.color}`}>
            <div className="w-8 h-8 md:w-12 md:h-12 relative">
              <Image className="rounded-full object-cover" fill={true} src={category.path} />
            </div>
            <span className="capitalize">{category.name}</span>
          </div>
        );
      })}

    </div>
  );
};

export default Categorylist;
