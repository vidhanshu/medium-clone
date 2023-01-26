import { AuthNav, BlogCard, Button, Container, Modal } from "../components";
import { BLOGS, PROFILE } from "../constants";
import React, { useEffect } from "react";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiMailAddLine } from "react-icons/ri";

function Profile() {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      {modal && (
        <Modal
          onClose={() => {
            setModal(false);
          }}
        >
          <ul>
            {BLOGS.map((e) => {
              return (
                <div className="flex justify-between items-center mb-6">
                  <span className="flex gap-x-2 basis-[85%]">
                    <img
                      src={PROFILE}
                      alt=""
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <h1 className="text-sm text-gray-600">{e.user.name}</h1>
                      <p className="text-xs text-gray-500">{e.content}</p>
                    </div>
                  </span>
                  <Button className="bg-g">Follow</Button>
                </div>
              );
            })}
          </ul>
        </Modal>
      )}
      <AuthNav />
      <Container className="br1 lg:inline-block lg:w-[60%] lg:align-top">
        <div>
          <div className="flex justify-between items-center mb-5">
            <h1 className="hidden sm:block font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Vidhanshu Borade
            </h1>
            <div className="sm:hidden font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex gap-x-4">
              <img src={PROFILE} alt="" className="w-14 h-14 rounded-full" />
              <div>
                <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1">
                  Vidhanshu Borade
                </h1>
                <p className="text-sm font-normal text-gray-500">34.2k Followers</p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <Button className="bg-g hidden sm:block lg:hidden">Follow</Button>
              <Button className="bg-g hidden sm:block lg:hidden">
                <RiMailAddLine />
              </Button>
              <HiOutlineDotsHorizontal
                size={25}
                color="gray"
                className="cursor-pointer self-center"
              />
            </div>
          </div>
          <div className="sm:hidden flex justify-between gap-x-2">
            <Button className="bg-g basis-[100%]">Follow</Button>
            <Button className="bg-g">
              <RiMailAddLine />
            </Button>
          </div>
        </div>
        <div className="bb1 mb-10">
          <h1 className="py-2 text-gray-500 cursor-pointer border-black border-b-[2px] max-w-fit">
            Home
          </h1>
        </div>
        <div className="flex flex-col gap-y-6">
          {BLOGS.map((e) => (
            <>
              <BlogCard {...e} />
              <hr className="mt-4" />
            </>
          ))}
        </div>
      </Container>
      {/* profile */}
      <Container className="w-[40%] sticky top-0 hidden lg:inline-block">
        {/* <div className="max-w-[70%]"> */}
        <img src={PROFILE} className="w-h-20 h-20 rounded-full mb-2" alt="" />
        <h1 className="font-semibold mb-1">Vidhanshu Borade</h1>
        <p className="text-gray-500 mb-4">2.7k Followers</p>
        <p className="text-gray-500 text-sm mb-4">
          7M+ Views on Medium || Code Less, Earn More: Make money using your
          tech skills 👉 http://bit.ly/3hb06X4
        </p>
        <div className="flex gap-x-2">
          <Button className="bg-g">Follow</Button>
          <Button className="bg-g">
            <RiMailAddLine />
          </Button>
        </div>
        <div>
          <h1 className="font-semibold mb-4 mt-6">Following</h1>
          <ul>
            {BLOGS.map((e) => {
              return <ProfileNameCard name={e.user.name} />;
            })}
          </ul>
          <h1
            className="text-g cursor-pointer"
            onClick={() => {
              setModal(true);
            }}
          >
            See all
          </h1>
        </div>
        {/* </div> */}
      </Container>
    </>
  );
}

export default Profile;

type ProfileNameCardProps = {
  name: string;
};
const ProfileNameCard = ({ name }: ProfileNameCardProps) => {
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (e.target.closest("._menu_container_profile")) return;
      setActive(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex justify-between items-center mb-4">
      <span className="flex gap-x-2 items-center">
        <img src={PROFILE} alt="" className="w-6 h-6 rounded-full" />
        <h1 className="text-sm text-gray-500">{name}</h1>
      </span>
      <div className="relative  _menu_container_profile">
        <HiOutlineDotsHorizontal
          size={20}
          color="gray"
          className="cursor-pointer"
          onClick={() => setActive(!active)}
        />

        <div
          className={`${
            active ? "block" : "hidden"
          } max-h-[90vh] overflow-auto border-[1px] w-56 text-sm text-gray-500 absolute top-[120%] right-0 rounded-md z-10 bg-white`}
        >
          <ul className="flex flex-col gap-y-4 py-4">
            <li className="cursor-pointer px-4">Mute this author</li>
            <li className="cursor-pointer px-4">Mute this publication</li>
            <li className="cursor-pointer px-4">Report</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
