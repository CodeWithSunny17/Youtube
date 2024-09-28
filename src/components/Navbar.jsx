import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleOpenBar } from "../features/youtubeSlice";

export default function Navbar({ setSearchQuery }) {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.searchQuery.value);
  };

  return (
    <div className="flex justify-between items-center px-6 h-14 bg-zinc-900 text-white fixed top-0 w-[100vw] z-10">
      <div className="flex justify-center items-center gap-6 ">
        <div
          className="text-xl cursor-pointer"
          onClick={() => dispatch(toggleOpenBar())}
        >
          <RxHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex justify-between items-center gap-1 cursor-pointer">
            {/* <img src="/YtLight.svg" alt="Video-player-icon" className="h-6 " /> */}
            <img src="/YtDark.svg" alt="Video-player-icon" className="h-6 " />
          </div>
        </Link>
      </div>
      <div className="hidden sm:block">
        <form action="" onSubmit={handleSearch}>
          <div className="flex justify-center items-center gap-4 ">
            <div
              className={`flex justify-center items-center h-10 pl-4 pr-0 rounded-3xl bg-zinc-950 border border-r-0 border-zinc-700 `}
            >
              <div>
                <input
                  name="searchQuery"
                  type="text"
                  placeholder="Search"
                  className="bg-zinc-950 w-[10vw] md:w-[35vw] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-zinc-800 h-10 w-16 flex justify-center items-center rounded-r-3xl border border-zinc-700 cursor-pointer"
              >
                <FiSearch />
              </button>
            </div>
            <div className="w-10 h-10 bg-zinc-800 flex justify-center items-center rounded-full cursor-pointer">
              <FaMicrophone />
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="cursor-pointer">
          <RiVideoAddLine className="text-2xl" />
        </div>
        <div className="cursor-pointer">
          <IoMdNotificationsOutline className="text-2xl" />
        </div>
        <div className="cursor-pointer">
          <div className="w-8 h-8 bg-zinc-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
