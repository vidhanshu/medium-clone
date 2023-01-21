import React, { AllHTMLAttributes } from "react";

const PADDINGS = {
  pylg: "py-8",
  pyxl: "py-16",
  py2xl: "py-24",
};

type ContainerProp = AllHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  py?: "pylg" | "pyxl" | "py2xl"; //padding y large
};
function Container({ children, py, className, ...props }: ContainerProp) {
  return (
    <div
      {...props}
      className={`p-4 ${py ? PADDINGS[py] : ''} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}

export default Container;
