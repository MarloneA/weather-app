import React, { ReactNode } from "react";

export default function Button({
  children,
  props,
}: {
  children: React.ReactNode;
  props: any;
}) {
  return (
    <button className="btn btn-primary" {...props}>
      {children}
    </button>
  );
}
