import Cardlist from "@/components/cardlist/Cardlist";
import Menu from "@/components/menu/Menu";

const Page = () => {
  return (
    <div>
        <h2 className="bg-orange-300 text-3xl text-center px-2 py-4 my-4">Style Blog</h2>
        <div className="flex flex-col md:flex-row gap-x-10 mt-8">
            <Cardlist/>
            <Menu/>
        </div>
    </div>
  );
};

export default Page;
