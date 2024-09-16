import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import OpaqueScreen from "./components/OpaqueScreen";
import Home from "./pages/Home";
import VideoPlay from "./pages/VideoPlay";
import "./App.css";

// Common layout component for all routes
const Layout = ({ children, toggleOpen, SetOpenBar, openBar }) => {
  return (
    <>
      <Navbar toggleOpen={toggleOpen} SetOpenBar={SetOpenBar} />
      <Sidebar
        openBar={openBar}
        toggleOpen={toggleOpen}
        SetOpenBar={SetOpenBar}
      />
      <OpaqueScreen SetOpenBar={SetOpenBar} openBar={openBar} />
      {children}
    </>
  );
};

export default function App() {
  const [openBar, SetOpenBar] = useState(false);

  const toggleOpen = () => {
    SetOpenBar(!openBar);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          toggleOpen={toggleOpen}
          SetOpenBar={SetOpenBar}
          openBar={openBar}
        >
          <Home />
        </Layout>
      ),
    },
    {
      path: "/home",
      element: (
        <Layout
          toggleOpen={toggleOpen}
          SetOpenBar={SetOpenBar}
          openBar={openBar}
        >
          <Home />
        </Layout>
      ),
    },
    {
      path: "/video/:videoId",
      element: (
        <Layout
          toggleOpen={toggleOpen}
          SetOpenBar={SetOpenBar}
          openBar={openBar}
        >
          <VideoPlay />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
