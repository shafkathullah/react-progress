import User1 from "../images/3.jpg";
import User2 from "../images/1.jpg";
import User3 from "../images/4.jpg";

function Table() {
  return (
    <div className="px-14 pb-24 overflow-x-auto">
      <table class="table-fixed min-w-full leading-normal">
        <thead>
          <tr className="border-t border-b">
            <th className="w-80 py-5 pr-7 text-base font-normal	text-gray-500 text-left">
              <div className="ml-2">Users</div>
            </th>
            <th className="py-5 px-7 text-base font-normal	text-gray-500 text-left">
              Status
            </th>
            <th className="py-5 px-7 text-base font-normal	text-gray-500 text-left">
              Users
            </th>
            <th className="py-5 px-7 text-base font-normal	text-gray-500 text-left">
              Impression
            </th>
            <th className="py-5 px-7 text-base font-normal	text-gray-500 text-left">
              Conversion
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-7 pr-7">
              <div className="flex items-center">
                <img
                  src={User1}
                  alt="User"
                  className="w-14 h-14 bg-gray-400 rounded-full mr-7"
                />
                <p className="whitespace-nowrap ">Robert Johnstons</p>
              </div>
            </td>
            <td className="p-7 ">
              <span className="rounded-md text-white font-bold text-sm px-3 py-1 bg-yellow-500">
                Paused
              </span>
            </td>
            <td className="p-7 ">
              <p className="whitespace-nowrap mb-1 text-gray-800">189</p>
              <p className="whitespace-nowrap text-gray-400">Total users</p>
            </td>
            <td className="p-7 ">
              <p className="whitespace-nowrap mb-1 text-gray-800">189</p>
              <p className="whitespace-nowrap text-gray-400">Total users</p>
            </td>
            <td className="p-7 ">
              <p className="whitespace-nowrap mb-1 text-gray-800">189</p>
              <p className="whitespace-nowrap text-gray-400">Total users</p>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-7 pr-7">
              <div className="flex items-center">
                <img
                  src={User2}
                  alt="User"
                  className="w-14 h-14 bg-gray-400 rounded-full mr-7"
                />
                <p className="whitespace-nowrap ">Anna Atkinsone</p>
              </div>
            </td>
            <td className="p-7 ">
              <span className="rounded-md text-white font-bold text-sm px-3 py-1 bg-blue-600">
                Active
              </span>
            </td>
            <td className="p-7 ">
              <p className="whitespace-nowrap mb-1 text-gray-800">189</p>
              <p className="whitespace-nowrap text-gray-400">Total users</p>
            </td>
            <td className="p-7 ">
              <p className="whitespace-nowrap mb-1 text-gray-800">189</p>
              <p className="whitespace-nowrap text-gray-400">Total users</p>
            </td>
            <td className="p-7 ">
              <p className="whitespace-nowrap mb-1 text-gray-800">189</p>
              <p className="whitespace-nowrap text-gray-400">Total users</p>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-7 pr-7">
              <div className="flex items-center">
                <img
                  src={User3}
                  alt="User"
                  className="w-14 h-14 bg-gray-400 rounded-full mr-7"
                />
                <p className="whitespace-nowrap ">Mark Atkinsone</p>
              </div>
            </td>
            <td className="p-7 ">
              <span className="rounded-md text-white font-bold text-sm px-3 py-1 bg-blue-600">
                Active
              </span>
            </td>
            <td className="p-7 ">
              <p className="whitespace-nowrap mb-1 text-gray-800">189</p>
              <p className="whitespace-nowrap text-gray-400">Total users</p>
            </td>
            <td className="p-7 ">
              <p className="whitespace-nowrap mb-1 text-gray-800">189</p>
              <p className="whitespace-nowrap text-gray-400">Total users</p>
            </td>
            <td className="p-7 ">
              <p className="whitespace-nowrap mb-1 text-gray-800">189</p>
              <p className="whitespace-nowrap text-gray-400">Total users</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
