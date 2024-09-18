import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleOpenBar } from "../features/youtubeSlice";

const Sidebar = ({}) => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const dispatch = useDispatch();

  const isActive = useSelector((state) => state.youtube.openBar);

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
    <div
      className={
        "h-[100vh] flex justify-center items-center bg-zinc-900 text-white absolute z-50"
      }
    >
      <div
        className={`fixed top-0 left-0 h-full  w-[35%] md:w-[20%] text-white transform transition-transform duration-300 ease-in-out ${
          isActive ? "translate-x-0" : "-translate-x-full"
        } overflow-hidden group`}
      >
        <div className="h-full overflow-y-auto pb-4  custom-scrollbar">
          {/* <Accordian toggleOpen={toggleOpen} /> */}

          <div className="bg-zinc-900">
            <div className="flex items-center gap-6 px-6 pt-3  pb-3 sticky top-0 bg-zinc-900">
              <div
                className="text-xl cursor-pointer"
                onClick={() => dispatch(toggleOpenBar())}
              >
                <RxHamburgerMenu />
              </div>

              <Link to="/">
                <div className="flex justify-between items-center gap-1 cursor-pointer">
                  {/* <img src="/YtLight.svg" alt="Video-player-icon" className="h-6 " /> */}
                  <img
                    src="/YtDark.svg"
                    alt="Video-player-icon"
                    className="h-6 "
                  />
                </div>
              </Link>
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
                    <BiChevronRight size={25} />
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
