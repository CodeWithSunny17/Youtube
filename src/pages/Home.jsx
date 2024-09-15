import React from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import YoutubeVideos from "../components/YoutubeVideos";
import { useState } from "react";
import Button from "../components/Button";

const Home = () => {

	const [openBar, SetOpenBar] = useState(false);
	console.log(openBar); // these are my changes

	const toggleOpen = () => {
		SetOpenBar(!openBar);
	};

	return (
		<div>
			<div
				className={`sticky top-0 ${
					openBar ? "bg-black text-zinc-800 opacity-95" : ""
				}`}
			>
				<Navbar toggleOpen={toggleOpen} />
			</div>
			<div className="flex bg-zinc-900">
				<div className=" text-white z-[20]">
					<Sidebar openBar={openBar} toggleOpen={toggleOpen} />
				</div>
				<div
					className="w-full h-ful"
					onClick={() => {
						SetOpenBar(false);
					}}
				>
					<div className="flex">
						<Button label={"Video"} />
						<Button label={"Article"} />
					</div>
					<div>
						
					</div>
				</div>
			</div>
		</div>
	);

  const [openBar, SetOpenBar] = useState(false);
  console.log(openBar); // these are my changes

  const toggleOpen = () => {
    SetOpenBar(!openBar);
  };

  return (
    <div>
      <div className={"fixed top-0 w-[100vw]"}>
        <Navbar toggleOpen={toggleOpen} SetOpenBar={SetOpenBar} />
      </div>
      <div className="flex justify-center items-center bg-zinc-900 text-white absolute z-50">
        <Sidebar
          className=""
          openBar={openBar}
          toggleOpen={toggleOpen}
          SetOpenBar={SetOpenBar}
        />
      </div>

      <div
        className={
          openBar
            ? "w-[100vw] h-[100vh] z-30 bg-zinc-900 opacity-60 absolute"
            : "-z-10"
        }
        onClick={() => SetOpenBar(false)}
      ></div>
      <div className="w-[100vw] h-[100vh] bg-zinc-900">
        {/* <YoutubeVideos toggleOpen={toggleOpen} SetOpenBar={SetOpenBar} /> */}
      </div>
    </div>
  );
};

export default Home;
