import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleClose } from "../features/youtubeSlice";

export function OpaqueScreen({}) {
  const openBar = useSelector((state) => state.youtube.openBar);
  const dispatch = useDispatch();

  // UseEffect hook to disable scroll when the modal is open
  useEffect(() => {
    if (openBar) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
    // Clean up effect to ensure scroll is enabled when the modal is closed
    return () => {
      document.body.style.overflow = "";
    };
  }, [openBar]);

  if (!openBar) return null;

  return (
    <div
      className={
        openBar
          ? "w-[100vw] h-[100vh] z-30 bg-zinc-900 opacity-60 absolute"
          : "-z-10"
      }
      onClick={() => dispatch(toggleClose())}
    ></div>
  );
}
