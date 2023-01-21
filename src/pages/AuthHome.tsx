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
      <header>
        <Container className="bg-y border-black border-b-[1px] flex flex-col gap-y-10 py-20">
          <h1 className="text-7xl font-ci font-bold">Stay curious.</h1>
          <p className="text-xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <Button className="text-lg px-8">Start reading</Button>
        </Container>
      </header>

      <Container py="pylg" className="bb1">
        <div className="mb-3 flex text-base items-center gap-x-5 font-semibold">
          <IoTrendingUp className="border-[1px] border-black rounded-full pr-1" />{" "}
          Trending on Medium
        </div>

        <div className="flex flex-col gap-y-8 ">
          {TRENDING_BLOGS.map((e) => {
            return <TrendingBlogCard key={e.id} {...e} />;
          })}
        </div>
      </Container>

      <Container py="pylg" className="bb1 flex flex-wrap gap-2">
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
      </Container>

      <Container py="pyxl" className="flex flex-col gap-y-8 ">
        {BLOGS.map((e) => {
          return <BlogCard key={e.id} {...e} />;
        })}
      </Container>

      <Container py="pylg" className="bg-black text-white flex flex-col gap-y-5">
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
