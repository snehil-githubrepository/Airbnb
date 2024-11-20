import React from "react";
import { FaAirbnb } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchOption = ({ label, subLabel }) => (
  <div className="flex flex-col justify-center font-sans px-4 py-2 rounded-full cursor-pointer hover:bg-gray-300 hover:px-5 hover:py-2.5">
    <span className="font-semibold text-xs">{label}</span>
    <div className="text-gray-500 text-sm">{subLabel}</div>
  </div>
);

function Header() {
  return (
    <div>
      <header className="flex justify-around p-3 bg-white">
        {/* Logo Part */}
        <a
          href="/"
          className="flex items-center gap-1 cursor-pointer"
          aria-label="Airbnb Home"
        >
          <FaAirbnb className="text-red-500 text-3xl" />
          <p className="text-red-500 font-bold font-sans text-xl">airbnb</p>
        </a>

        {/* Search Box */}
        <div className="flex items-center gap-2 border text-sm border-gray-300 shadow-lg rounded-full">
          <div className="group flex items-center gap-2">
            <SearchOption label="Where" subLabel="Search Destinations" />
            <div className="border-l border-gray-300 h-6 self-center group-hover:border-transparent"></div>
            <SearchOption label="Check in" subLabel="Add Dates" />
            <div className="border-l border-gray-300 h-6 self-center group-hover:border-transparent"></div>
            <SearchOption label="Check out" subLabel="Add Dates" />
            <div className="border-l border-gray-300 h-6 self-center group-hover:border-transparent"></div>
            <div className="flex gap-2 justify-center font-sans px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 hover:px-5 hover:py-2">
              <div>
                <span className="font-semibold text-xs">Who</span>
                <div className="text-gray-500 text-sm">Add Guests</div>
              </div>
              <button className="rounded-full ml-2 p-2.5 text-white bg-red-500 hover:bg-pink-600">
                <CiSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Login Part */}
        <Link
          to={"/login"}
          className="flex gap-2 items-center border border-gray-300 shadow-md rounded-full px-4"
        >
          <FaBars className="text-md" />
          <div className="text-3xl text-gray-500 rounded-full">
            <FaUserCircle />
          </div>
        </Link>
      </header>
    </div>
  );
}

export default Header;
