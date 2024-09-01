import React from "react";

export default function Input({ ...props }) {
  return (
    <input
      className="input input-solid w-[25rem] mr-4 font-bold text-black rounded-xl bg-[#ffffff2e]"
      placeholder="Primary"
      {...props}
    />
  );
}
