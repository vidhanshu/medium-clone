import { CiBookmark, CiEdit, CiSearch, CiUser } from "react-icons/ci";
import { MENU_FOOTER_OPTIONS, PEOPLE, PROFILE } from "../constants";
import { TfiBook, TfiStatsUp } from "react-icons/tfi";
import { useEffect, useState } from "react";

import { AiOutlineDown } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { _TEXT_SHORTNER } from "../utils";

function AuthNav() {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (e.target.closest("._menu_container")) return;
      setActive(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="px-5 py-1 bb1 flex items-center">
      <div className="flex gap-x-2 items-center basis-[40%]">
        <BsMedium size={45} />
        <div className="hidden sm:flex gap-x-2 p-2 py-1 bg-gray-100 rounded-full relative">
          <CiSearch
            className="flex text-sm text-gray-700 gap-x-1 items-center"
            size={25}
          />
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="bg-transparent text-sm placeholder:font-light focus:outline-none"
            placeholder="Search Medium"
          />

          {/* suggestions */}
          <div
            className={`${
              search.length > 0 ? "block" : "hidden"
            } __search_suggestions max-h-[90vh] overflow-auto border-[1px] w-64 text-sm text-gray-500 absolute top-[120%] right-0 rounded-md z-10 bg-white`}
          >
            <ul className="flex flex-col gap-y-4 py-4">
              <li className="px-4">PEOPLE</li>
              <hr />
              {PEOPLE.slice(0, 3).map((e) => {
                return (
                  <li
                    className="px-4 flex gap-x-2 items-center text-sm text-black cursor-pointer"
                    key={e.id}
                  >
                    <img
                      className="rounded-full"
                      src={e.profile_image}
                      alt=""
                      width={30}
                      height={30}
                    />
                    <p>{e.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* suggestions */}
        </div>
      </div>
      <div className="flex basis-[60%] justify-end gap-x-5 items-center">
        <CiSearch
          className="flex sm:hidden text-sm text-gray-500 gap-x-1 items-center"
          size={25}
        />
        <div className="hidden sm:flex text-sm text-gray-500 gap-x-1 items-center">
          <CiEdit size={25} />
          Write
        </div>
        <IoIosNotificationsOutline
          className="text-sm text-gray-500"
          size={25}
        />
        <div className="_menu_container relative">
          <span
            className="flex gap-x-1 items-center cursor-pointer"
            onClick={() => {
              setActive(!active);
            }}
          >
            <img
              src={PROFILE}
              width={35}
              height={35}
              className="rounded-full"
              alt="profile"
            />
            <AiOutlineDown size={10} color="gray" />
          </span>

          <div
            className={`${
              active ? "block" : "hidden"
            } max-h-[90vh] overflow-auto border-[1px] w-64 text-sm text-gray-500 absolute top-[120%] right-0 rounded-md z-[22] bg-white`}
          >
            <ul className="flex flex-col gap-y-4">
              <li className="sm:hidden cursor-pointer flex gap-x-4 px-4 pt-4">
                <CiEdit size={23} /> Write
              </li>
              <hr />
              <Link to="/profile">
                <li className="cursor-pointer flex gap-x-4 px-4">
                  <CiUser size={23} /> Profile
                </li>
              </Link>
              <li className="cursor-pointer flex gap-x-4 px-4">
                <CiBookmark size={23} /> Lists
              </li>
              <li className="cursor-pointer flex gap-x-4 px-4">
                <TfiBook size={20} /> Stories
              </li>
              <li className="cursor-pointer flex gap-x-4 px-4">
                <TfiStatsUp size={20} /> stats
              </li>
              <hr />
              <li className="cursor-pointer px-4">Settings</li>
              <li className="cursor-pointer px-4">Refine recommendations</li>
              <li className="cursor-pointer px-4">Manage publications</li>
              <hr />
              <li className="cursor-pointer px-4">Become a member</li>
              <li className="cursor-pointer px-4">Apply to partner program</li>
              <li className="cursor-pointer px-4">Gift a membership</li>
              <hr />
              <li className="cursor-pointer px-4">sign out</li>
              <li className="cursor-pointer px-4 pb-4">
                {_TEXT_SHORTNER("vidhanshu.borade.cs@ghrce.raisoni.net", 20)}
              </li>
            </ul>
            <ul className="text-xs bg-gray-100 p-4 flex flex-wrap gap-2">
              {MENU_FOOTER_OPTIONS.map((e) => {
                return <li className="hover:underline">{e}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthNav;
