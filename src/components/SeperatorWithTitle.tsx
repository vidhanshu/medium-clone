import React from "react";

type SeperatorWithTitleProps = {
  children: React.ReactNode;
};
function SeperatorWithTitle({ children }: SeperatorWithTitleProps) {
  return (
    <div className="flex items-center gap-x-2">
      <div className="bb1 w-full min-w-[100px]"></div>
      {children}
      <div className="bb1 w-full min-w-[100px]"></div>
    </div>
  );
}

export default SeperatorWithTitle;
