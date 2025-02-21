import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleOpenBar, toggleSearch } from "../features/youtubeSlice";

export function Navbar({ setCategory }) {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false); // Toggle for search bar in mobile

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(toggleSearch(e.target.searchQuery.value));
    setShowSearch(false); // Close search bar after search
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-6 h-14 bg-zinc-900 text-white fixed top-0 w-full z-10">
      {/* Left: Logo & Menu */}
      <div className="flex items-center gap-6">
        <div
          className="text-xl cursor-pointer"
          onClick={() => dispatch(toggleOpenBar())}
        >
          <RxHamburgerMenu />
        </div>
        <Link to="/" onClick={() => setCategory("")}>
          {/* <img src="/YtDark.svg" alt="Video-player-icon" className="h-6" /> */}
          <h1 className="text-2xl font-semibold">ViteTube</h1>
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div
        className={`absolute left-0 right-0 px-4 top-14 bg-zinc-900 transition-all duration-300 ${
          showSearch ? "flex" : "hidden"
        } sm:flex sm:relative sm:top-0 sm:bg-transparent sm:px-0`}
      >
        <form className="w-full sm:w-auto" onSubmit={handleSearch}>
          <div className="flex items-center border border-zinc-700 rounded-3xl bg-zinc-950">
            <input
              name="searchQuery"
              type="text"
              placeholder="Search"
              className="w-full sm:w-[35vw] bg-zinc-950 px-4 h-10 focus:outline-none rounded-l-3xl"
            />
            <button
              type="submit"
              className="bg-zinc-800 px-4 h-10 flex items-center justify-center rounded-r-3xl border-l border-zinc-700"
            >
              <FiSearch />
            </button>
          </div>
        </form>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Search Icon (Mobile Only) */}
        <button
          className="sm:hidden text-xl"
          onClick={() => setShowSearch(!showSearch)}
        >
          <FiSearch />
        </button>

        {/* Microphone (Hidden on Small Screens) */}
        <div className="hidden sm:flex w-10 h-10 bg-zinc-800 rounded-full items-center justify-center cursor-pointer">
          <FaMicrophone />
        </div>

        <RiVideoAddLine className="text-2xl cursor-pointer" />
        <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
        <div className="w-8 h-8 bg-zinc-500 rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
}
