import { MenuIcn } from "../icons/index";
import Table from "./Table";
import Chart from "./Chart";

function Main() {
  return (
    <div className="h-screen w-screen bg-gray-50 overflow-scroll">
      <div className="bg-white mx-14 my-11 ">
        <div className="flex px-14 py-10 items-center justify-between">
          <h1 className="text-4xl text-gray-700">Overview</h1>
          <button className="py-2">
            <MenuIcn className="text-gray-700 w-6 h-6" />
          </button>
        </div>
        {/* horizontal rule */}
        <div className="h-px w-full bg-gray-200"></div>
        <Chart />
        <Table />
      </div>
    </div>
  );
}

export default Main;
