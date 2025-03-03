import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiChevronRight } from "react-icons/bi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleOpenBar, toggleClose } from "../features/youtubeSlice";
import { SiYoutubegaming } from "react-icons/si";
import { FaCarSide } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";
import { BiTv } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

export const Sidebar = ({ setVideoDuration, setCategory }) => {
	const [expandedAccordion, setExpandedAccordion] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const isActive = useSelector((state) => state.youtube.openBar);

	const accordionsHome = [
		{
			id: "home",
			title: "Home",
			code: "",
			icon: <FaRegUser size={20} />,
		},

		{
			id: "shorts",
			title: "Shorts",
			code: "&videoCategoryId=42",
			icon: <SiYoutubeshorts size={20} />,
		},
		{
			id: "gaming",
			title: "Gaming",
			code: "&videoCategoryId=20",
			icon: <SiYoutubegaming size={20} />,
		},
		{
			id: "automobiles",
			title: "Automobiles",
			code: "&videoCategoryId=2",
			icon: <FaCarSide size={20} />,
		},
		{
			id: "sports",
			title: "Sports",
			code: "&videoCategoryId=17",
			icon: <MdSportsBasketball size={20} />,
		},
		{
			id: "entertainment",
			title: "Entertainment",
			code: "&videoCategoryId=24",
			icon: <BiTv size={20} />,
		},
		{
			id: "technology",
			title: "Technology",
			code: "&videoCategoryId=28",
			icon: <GrTechnology size={20} />,
		},
		{
			id: "music",
			title: "Music",
			code: "&videoCategoryId=10",
			icon: <MdLibraryMusic size={20} />,
		},
		{
			id: "blogs",
			title: "Blogs",
			code: "&videoCategoryId=22",
			icon: <FaBlogger size={20} />,
		},
		{
			id: "news",
			title: "News",
			code: "&videoCategoryId=25",
			icon: <FaNewspaper size={20} />,
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

	const handleCategoryClick = (categoryId) => {
		setCategory(`&videoCategoryId=${categoryId}`);
		navigate('/');
	};

	return (
		<div className="h-[100vh] flex justify-center items-center bg-zinc-900 text-white absolute z-50">
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

							<Link
								to="/"
								onClick={() => {
									dispatch(toggleClose());
									setVideoDuration("");
								}}
							>
								{/* <img
                  src="/YtDark.svg"
                  alt="Video-player-icon"
                  className="h-6 "
                /> */}

								<h1 className="text-2xl font-semibold">ViteTube</h1>
							</Link>
						</div>
						<div className="overflow-y-auto h-[50%] border-b border-zinc-700 mx-3 pb-2">
							<div className="w-full">
								<div className="flex-grow overflow-auto ">
									{accordionsHome.map((accordion) => (
										<div
											key={accordion.id}
											onClick={() => {
												handleCategoryClick(accordion.code);
											}}
										>
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
					</div>
				</div>
			</div>
		</div>
	);
};
