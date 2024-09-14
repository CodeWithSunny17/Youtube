import React from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";

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
					{" "}
					Hi there
				</div>
			</div>
		</div>
	);
};

export default Home;
