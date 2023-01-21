import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};
function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-fit bg-black py-2 px-4 rounded-full text-white text-sm ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
