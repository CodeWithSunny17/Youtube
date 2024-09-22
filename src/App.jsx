import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import OpaqueScreen from "./components/OpaqueScreen";
import Home from "./pages/Home";
import VideoPlay from "./pages/VideoPlay";
import "./App.css";
import { useState } from "react";

export default function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Navbar setSearchQuery={setSearchQuery}/>
					<Sidebar />
					<OpaqueScreen />
					<Home searchQuery={searchQuery}/>
				</>
			),
		},
		{
			path: "/home",
			element: (
				<>
					<Navbar setSearchQuery={setSearchQuery}/>
					<Sidebar />
					<OpaqueScreen />
					<Home searchQuery={searchQuery}/>
				</>
			),
		},
		{
			path: "/video/:videoId",
			element: (
				<>
					<Navbar setSearchQuery={setSearchQuery}/>
					<Sidebar />
					<OpaqueScreen />
					<VideoPlay />
				</>
			),
		},
	]);

	return <RouterProvider router={router} />;
}
