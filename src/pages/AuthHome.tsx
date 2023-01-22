import { BLOGS, TRENDING_BLOGS, TRENDING_TOPICS } from "../constants";
import {
  BlogCard,
  Button,
  Container,
  LogoWithName,
  TrendingBlogCard,
  UnAuthNav,
} from "../components";

import { IoTrendingUp } from "react-icons/io5";

function AuthHome() {
  return (
    <div>
      <UnAuthNav />
      <header className="relative z-[-1] overflow-hidden">
        <Container
          className="bg-y border-black border-b-[1px]"
          classInnerName="flex flex-col gap-y-10 py-20"
        >
          <h1 className="text-7xl font-ci font-bold sm:text-8xl">
            Stay curious.
          </h1>
          <p className="text-xl sm:text-2xl max-w-md">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <Button className="text-lg px-8">Start reading</Button>
        </Container>

        <img
          className="md:block hidden absolute z-1 top-0 bottom-0 m-auto right-[-220px] lg:right-0"
          src="/images/M.svg"
          alt=""
        />
      </header>

      <Container py="pylg" className="bb1 p-0">
        <div className="mb-3 flex text-base items-center gap-x-5 font-semibold text-gray-600">
          <IoTrendingUp
            size={25}
            className="border-[1px] border-black rounded-full pr-1"
          />
          Trending on Medium
        </div>

        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lgx:grid-cols-3 md:gap-x-3 justify-start">
          {TRENDING_BLOGS.map((e) => {
            return <TrendingBlogCard key={e.id} {...e} />;
          })}
        </div>
      </Container>

      <div className="lg:flex lg:flex-row-reverse relative">
        <Container py="pylg" className="bb1 lg:basis-[40%]">
          <p className="font-medium mb-5">
            Discover more of what matters to you
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {TRENDING_TOPICS.map((e, idx) => {
              return (
                <div
                  key={idx}
                  className="border-[1px] w-fit py-2 px-4 text-sm text-gray-500"
                >
                  {e}
                </div>
              );
            })}
          </div>
          <hr />
          <div className="flex-wrap hidden lg:flex mt-5 lg:basis-[60%] lg:gap-2 sticky top-0">
            <p className="text-gray-500 pr-4 text-sm font-semibold">Help</p>
            <p className="text-gray-500 pr-4 text-sm font-semibold">Status</p>
            <p className="text-gray-500 pr-4 text-sm font-semibold">Write</p>
            <p className="text-gray-500 pr-4 text-sm font-semibold">Blog</p>
            <p className="text-gray-500 pr-4 text-sm font-semibold">Careers</p>
            <p className="text-gray-500 pr-4 text-sm font-semibold">Privacy</p>
            <p className="text-gray-500 pr-4 text-sm font-semibold">Terms</p>
            <p className="text-gray-500 pr-4 text-sm font-semibold">About</p>
            <p className="text-gray-500 pr-4 text-sm font-semibold">Text to speech</p>
          </div>
        </Container>

        <Container className="flex-1" py="pyxl" classInnerName="flex flex-col gap-y-8 ">
          {BLOGS.map((e) => {
            return <BlogCard key={e.id} {...e} />;
          })}
        </Container>
      </div>

      <Container
        py="pylg"
        className="bg-black text-white "
        classInnerName="flex flex-col gap-y-5"
      >
        <LogoWithName mode="light" />
        <ul className="flex text-sm gap-x-4">
          <li>About</li>
          <li>Help</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
        <hr />
        <div>
          Get the medium App
          <div className="flex mt-4 gap-x-3">
            <img
              className="w-1/3 max-w-[150px]"
              src="https://miro.medium.com/max/270/1*Crl55Tm6yDNMoucPo1tvDg.png"
              alt=""
            />
            <img
              className="w-1/3 max-w-[150px]"
              src="https://miro.medium.com/max/270/1*W_RAPQ62h0em559zluJLdQ.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AuthHome;
