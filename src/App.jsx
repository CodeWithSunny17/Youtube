import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import OpaqueScreen from "./components/OpaqueScreen";
import Home from "./pages/Home";
import VideoPlay from "./pages/VideoPlay";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Sidebar />
          <OpaqueScreen />
          <Home />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Navbar />
          <Sidebar />
          <OpaqueScreen />
          <Home />
        </>
      ),
    },
    {
      path: "/video/:videoId",
      element: (
        <>
          <Navbar />
          <Sidebar />
          <OpaqueScreen />
          <VideoPlay />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
