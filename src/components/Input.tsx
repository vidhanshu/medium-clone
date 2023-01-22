import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`border-b-[2px] focus:border-blue-600 focus:outline-none p-1 text-center block min-w-[300px] ${
        className ? className : ""
      }`}
    />
  );
}

export default Input;
