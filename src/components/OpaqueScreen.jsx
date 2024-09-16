import React from "react";

export default function OpaqueScreen({ SetOpenBar, openBar }) {
  return (
    <div
      className={
        openBar
          ? "w-[100vw] h-[100vh] z-30 bg-zinc-900 opacity-60 absolute"
          : "-z-10"
      }
      onClick={() => SetOpenBar(false)}
    ></div>
  );
}
