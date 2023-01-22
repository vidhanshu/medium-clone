import React, { AllHTMLAttributes } from "react";

const PADDINGS = {
  pylg: "py-8",
  pyxl: "py-16",
  py2xl: "py-24",
};

type ContainerProp = AllHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  py?: "pylg" | "pyxl" | "py2xl"; //padding y large
  classInnerName?: string;
};
function Container({
  children,
  py,
  className,
  classInnerName = "",
  ...props
}: ContainerProp) {
  return (
    <div
      {...props}
      className={`p-4 ${py ? PADDINGS[py] : ""} ${className ? className : ""}`}
    >
      <div className={`${classInnerName} sm:max-w-[95%] md:max-w-[90%] mx-auto`}>{children}</div>
    </div>
  );
}

export default Container;
