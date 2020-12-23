import MenuItem from "./MenuItem";
import ProfilePic from "../images/2.jpg";

function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col justify-between	w-80 h-screen bg-white overflow-scroll">
      <div className="mb-14">
        <img
          src={ProfilePic}
          className="w-20 h-20 bg-gray-100 rounded-full mx-auto mt-14"
          alt="Profile"
        />
        <h1 className="text-lg text-center mt-6">Michael Atkisons</h1>
        <h2 className="text-lg text-center mt-4 text-blue-600">My Profile</h2>

        {/* horizontal rule */}
        <div className="h-px w-48 mt-11 mx-auto bg-gray-200"></div>
        {/* Menu */}
        <h2 className="pl-10 mt-10 font-bold tracking-widest mb-7">MENU</h2>
        <MenuItem label="Inbox" active />
        <MenuItem label="Sent" />
        <MenuItem label="Draft" />
        <MenuItem label="Deleted" />
        <MenuItem label="Favourites" />
        <MenuItem label="Analytics" />
        <MenuItem label="Settings" />
      </div>
      {/* Lower Buttons */}
      <div>
        <button className="block w-48 text-center font-bold py-3 mx-auto mb-4 bg-blue-600 text-white rounded">
          Upgrade plan
        </button>
        <button className="block w-48 text-center font-bold py-3 mx-auto mb-14 bg-blue-100 text-blue-600 rounded">
          Contact Support
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
