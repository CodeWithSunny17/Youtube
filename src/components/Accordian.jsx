import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiChevronRight } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";

const Accordian = ({ toggleOpen }) => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const accordionsHome = [
    {
      id: "home",
      title: "Home",
      icon: <FaRegUser size={20} />,
    },

    {
      id: "shorts",
      title: "Shorts",
      icon: <FiMapPin size={20} />,
    },
    {
      id: "subscriptions",
      title: "Subscriptions",
      icon: <FaUsers size={20} />,
    },
  ];
  const profileArray = [
    {
      id: "yourchannel",
      title: "Your channel",
      icon: <FaRegUser size={20} />,
    },

    {
      id: "history",
      title: "History",
      icon: <FiMapPin size={20} />,
    },
    {
      id: "playlists",
      title: "Playlists",
      icon: <FaUsers size={20} />,
    },
    {
      id: "yourVideos",
      title: "Your videos",
      icon: <FaRegUser size={20} />,
    },

    {
      id: "watchlater",
      title: "Watch later",
      icon: <FiMapPin size={20} />,
    },
    {
      id: "liked videos",
      title: "Liked videos",
      icon: <FaUsers size={20} />,
    },
  ];

  const toggleAccordion = (id) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };
  return (
    <div className="bg-zinc-900">
      <div className="flex items-center gap-6 px-6 pt-3  pb-3 sticky top-0 bg-zinc-900">
        <div className="text-xl" onClick={toggleOpen}>
          <RxHamburgerMenu />
        </div>
        <div className="flex justify-between items-center gap-1">
          <div className="bg-white ml-1 w-4 h-4 z-0 absolute"></div>
          <FaYoutube className="text-3xl text-red-600 z-10" />
          <span className="text-2xl font-semibold">Youtube</span>
        </div>
      </div>
      <div className="overflow-y-auto h-[50%] border-b border-zinc-700 mx-3 pb-2">
        <div className="w-full">
          <div className="flex-grow overflow-auto ">
            {accordionsHome.map((accordion) => (
              <div key={accordion.id}>
                <button
                  className={`flex items-center justify-between hover:bg-zinc-800 w-[90%] py-3 pl-3 text-left transition-colors duration-300 rounded-md`}
                  onClick={() => toggleAccordion(accordion.id)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{accordion.icon}</span>
                    <span>{accordion.title}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[50%] border-b border-zinc-700 mx-3 pb-2">
        <div className="w-full">
          <div className="flex flex-cols items-center pl-5 pt-4 pb-3 font-semibold text-xl">
            You{" "}
            <button className="">
              <BiChevronRight  size={25}/>
            </button>
          </div>
          <div className="flex-grow overflow-auto ">
            {profileArray.map((accordion) => (
              <div key={accordion.id}>
                <button
                  className={`flex items-center justify-between hover:bg-zinc-800 w-[90%] py-3 pl-3 mx-3 text-left transition-colors duration-300 rounded-md`}
                  onClick={() => toggleAccordion(accordion.id)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{accordion.icon}</span>
                    <span>{accordion.title}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[50%] border-b border-zinc-700 mx-3 pb-2">
        <div className="w-full">
          <div className="flex flex-cols items-center pl-5 pt-4 pb-3 font-semibold text-xl">
            Subscriptions
          </div>
          <div className="flex-grow overflow-auto ">
            {accordionsHome.map((accordion) => (
              <div key={accordion.id}>
                <button
                  className={`flex items-center justify-between hover:bg-zinc-800 w-[90%] py-3 pl-3 mx-3 text-left transition-colors duration-300 rounded-md`}
                  onClick={() => toggleAccordion(accordion.id)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{accordion.icon}</span>
                    <span>{accordion.title}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[50%] border-b border-zinc-700 mx-3 pb-2">
        <div className="w-full">
          <div className="flex-grow overflow-auto ">
            {accordionsHome.map((accordion) => (
              <div key={accordion.id}>
                <button
                  className={`flex items-center justify-between hover:bg-zinc-800 w-[90%] py-3 pl-3 mx-3 text-left transition-colors duration-300 rounded-md`}
                  onClick={() => toggleAccordion(accordion.id)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{accordion.icon}</span>
                    <span>{accordion.title}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;