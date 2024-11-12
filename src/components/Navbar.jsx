import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-8 items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="text-white font-bold text-xl">My App</div>
      <div className="flex flex-row gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white text-lg px-4 py-2 rounded-md transition-all duration-200 ${
              isActive ? "bg-indigo-700" : "hover:bg-blue-700"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            `text-white text-lg px-4 py-2 rounded-md transition-all duration-200 ${
              isActive ? "bg-indigo-700" : "hover:bg-blue-700"
            }`
          }
        >
          Pastes
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
