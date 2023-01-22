import React, { useEffect } from "react";

import { RxCross1 } from "react-icons/rx";

type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
};
function Modal({ children, onClose, ...props }: ModalProps) {
  
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.style.overflow = "hidden";
    
    return ()=>{
      if (body) body.style.overflow = "auto";
    }
  }, []);

  return (
    <div className="fixed w-screen h-screen flex justify-center items-center bg-[#ffffffd6] backdrop-filter z-20">
      <div className="absolute w-full h-full" onClick={onClose}></div>
      <div
        {...props}
        className="bg-white p-4 rounded-md shadow-md max-w-[600px] w-[97%] max-h-[90%] overflow-auto z-[1]"
      >
        <div className="flex justify-end mb-3">
          <RxCross1
            onClick={onClose}
            color="gray"
            size={25}
            className="cursor-pointer"
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
