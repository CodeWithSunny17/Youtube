import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { OpaqueScreen } from "./components/OpaqueScreen";
import { Home } from "./pages/Home";
import { VideoPlay } from "./pages/VideoPlay";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videoDuration, setVideoDuration] = useState("medium");
  const [category, setCategory] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar setSearchQuery={setSearchQuery} />
          <Sidebar
            setCategory={setCategory}
            setVideoDuration={setVideoDuration}
          />
          <OpaqueScreen />
          <Home
            searchQuery={searchQuery}
            category={category}
            videoDuration={videoDuration}
          />
        </>
      ),
    },
    {
      path: "/video/:videoId",
      element: (
        <>
          <Navbar setSearchQuery={setSearchQuery} setCategory={setCategory} />
          <Sidebar
            setCategory={setCategory}
            setVideoDuration={setVideoDuration}
          />
          <OpaqueScreen />
          <VideoPlay />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
