import React from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Home = () => {
  const [openBar, SetOpenBar] = useState(false);

  const toggleOpen = () => {
    SetOpenBar(!openBar);
  };
  return (
    <div>
      <div className={`sticky top-0 ${openBar ? "blur-sm" : ""}`}>
        <Navbar toggleOpen={toggleOpen} />
      </div>
      <div className="bg-zinc-900 text-white z-[20]">
        <Sidebar openBar={openBar} toggleOpen={toggleOpen} />
      </div>
    </div>
  );
};

export default Home;
