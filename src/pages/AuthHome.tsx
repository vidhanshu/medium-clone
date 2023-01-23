import { AuthNav, CategorySlider, Container } from "../components";
import { BLOGS, TRENDING_TOPICS } from "../constants";
import { useEffect, useState } from "react";

import { BlogType } from "../types";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { TfiBookmark } from "react-icons/tfi";
import { _TEXT_SHORTNER } from "../utils";
import { useMediaQuery } from "react-responsive";

function AuthHome() {
  return (
    <>
      <AuthNav />
      <Container className="py-0 sticky top-0 bg-white px-0 z-[21]">
        <CategorySlider categories={TRENDING_TOPICS} />
      </Container>
      
      {/* This will be shown if the width > 924px */}
      <Container
        className="hidden lg:inline-block lg:max-w-[60%] align-top"
        py="pylg"
        classInnerName="flex flex-col gap-y-8"
      >
        {BLOGS.map((e) => {
          return <AuthBlogCard key={e.id} {...e} />;
        })}
      </Container>
      {/* This will be shown if the width > 924px */}

      <Container
        py="pylg"
        className="bb1 lg:border-none lg:max-w-[40%] lg:inline-block lg:sticky lg:top-[75px] align-top"
      >
        <p className="font-medium mb-5">Recommended topics</p>
        <div className="flex flex-wrap gap-2 pb-5 lg:bb1">
          {TRENDING_TOPICS.map((e, idx) => {
            return (
              <div
                key={idx}
                className="border-[1px] cursor-pointer w-fit py-2 px-4 text-sm text-gray-500"
              >
                {e}
              </div>
            );
          })}
        </div>
        <div className="flex-wrap hidden lg:flex mt-5 lg:basis-[60%] lg:gap-2 sticky top-0">
          <p className="text-gray-500 pr-4 text-xs cursor-pointer hover:underline font-semibold">Help</p>
          <p className="text-gray-500 pr-4 text-xs cursor-pointer hover:underline font-semibold">Status</p>
          <p className="text-gray-500 pr-4 text-xs cursor-pointer hover:underline font-semibold">Write</p>
          <p className="text-gray-500 pr-4 text-xs cursor-pointer hover:underline font-semibold">Blog</p>
          <p className="text-gray-500 pr-4 text-xs cursor-pointer hover:underline font-semibold">Careers</p>
          <p className="text-gray-500 pr-4 text-xs cursor-pointer hover:underline font-semibold">Privacy</p>
          <p className="text-gray-500 pr-4 text-xs cursor-pointer hover:underline font-semibold">Terms</p>
          <p className="text-gray-500 pr-4 text-xs cursor-pointer hover:underline font-semibold">About</p>
          <p className="text-gray-500 pr-4 text-xs cursor-pointer hover:underline font-semibold">
            Text to speech
          </p>
        </div>
      </Container>

      {/* This will be shown if the width < 924px */}
      <Container
        className="lg:hidden"
        py="pylg"
        classInnerName="flex flex-col gap-y-8"
      >
        {BLOGS.map((e) => {
          return <AuthBlogCard key={e.id} {...e} />;
        })}
      </Container>
      {/* This will be shown if the width < 924px */}
    </>
  );
}

export default AuthHome;

const PROFILE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU";

const AuthBlogCard = ({
  blog_image,
  content,
  id,
  min_to_read,
  tags,
  title,
  user,
  date,
  profile,
}: BlogType) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target.closest("._blog_menu")) return;
      setActive(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="bb1 mb-5 py-4">
      <div className="flex flex-col gap-y-2 sm:gap-y-1">
        <div className="flex items-center gap-x-2">
          <img
            width={20}
            height={20}
            className="rounded-full"
            src={PROFILE}
            alt="profile"
          />
          <p className="text-sm">
            {user.name} . {date}
          </p>
        </div>

        <div className="flex gap-x-2 mt-1">
          <div>
            <h1 className="text-base font-extrabold md:text-xl lg:text-base  lg:font-bold lgx:text-xl lgx:font-extrabold mb-4">
              {_TEXT_SHORTNER(content, isDesktop ? 100 : 50)}
            </h1>
            <p className="text-gray-500 hidden sm:block lg:text-sm lgx:text-base">
              {_TEXT_SHORTNER(content, 200)}
            </p>
          </div>
          <img
            className="w-[100px] h-[50px] sm:w-[150px] sm:h-[100px] md:w-[200px] md:h-[150px]"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            }
            alt=""
          />
        </div>
      </div>

      <p className="mt-4 text-[.8rem] text-gray-500 flex items-center justify-between">
        <span>
          <span className="bg-gray-200 px-2 py-[2px] rounded-full text-black">
            {tags[1]}
          </span>{" "}
          . {min_to_read} min read
        </span>
        <div className="flex gap-x-4">
          <TfiBookmark size={25} color="gray" className="cursor-pointer" />
          <IoRemoveCircleOutline
            size={25}
            color="gray"
            className="cursor-pointer"
          />
          <div className="_blog_menu relative">
            <HiOutlineDotsHorizontal
              size={25}
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
      </p>
    </div>
  );
};
