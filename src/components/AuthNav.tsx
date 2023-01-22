import { CiEdit, CiSearch } from "react-icons/ci";

import { BsMedium } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";

const PROFILE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU";

function AuthNav() {
  return (
    <div className="px-5 py-1 bb1 flex items-center">
      <div className="flex gap-x-2 items-center basis-[40%]">
        <BsMedium size={45} />
      </div>
      <div className="flex basis-[60%] justify-end gap-x-5 items-center">
        <CiEdit size={30} />
        <IoIosNotificationsOutline size={30} />
        <img src={PROFILE} width={35} height={35} className="rounded-full" alt=""/>
      </div>
    </div>
  );
}

export default AuthNav;
