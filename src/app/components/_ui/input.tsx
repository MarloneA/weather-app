import React from "react";

export default function Input({ ...props }) {
  return (
    <input
      className="input input-solid w-[20rem] mr-4 bg-[#ffffff2e]"
      placeholder="Primary"
      {...props}
    />
  );
}
