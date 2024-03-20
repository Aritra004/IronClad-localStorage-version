import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="myContainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>Iron
          <span className="text-green-500">Clad/&gt;</span>
        </div>

        <button className="text-white bg-green-500 my-5 rounded-full flex justify-between items-center">
          <img
            className="invert w-10 p-1 py-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fmhD2kyogkWRA65DvBXHsPaAjLjvP2Uc8iGWRfJYRw&s"
            alt="github"
          />
          <span className="font-bold px-2">Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
