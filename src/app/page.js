import Cardlist from "@/components/cardlist/Cardlist";
import Categorylist from "@/components/categorylist/Categorylist";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Pagination from "@/components/pagination/Pagination";

export default function Home() {
  return (
    <div>
      <Featured />
      <Categorylist />
      <div className="flex flex-col md:flex-row gap-x-10 mt-8">
        <Cardlist />
        <Menu />
      </div>

    </div>
  );
}
