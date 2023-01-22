import { BsBookmarkPlus } from "react-icons/bs";
import { BlogType } from "../types";
import { _TEXT_SHORTNER } from "../utils";

const PROFILE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU";

function BlogCard({ min_to_read, title, date, user, tags, content }: BlogType) {
  return (
    <div className="flex gap-x-2 sm:gap-x-4 justify-between">
      <div className="flex flex-col gap-y-2 sm:gap-y-1">
        <div className="flex items-center gap-x-2">
          <img
            width={20}
            height={20}
            className="rounded-full"
            src={PROFILE}
            alt="profile"
          />
          <p className="text-sm hidden md:block">{user.name}</p>
        </div>
        <h1 className="text-base font-extrabold md:text-xl">{title}</h1>
        <p className="text-gray-500">{_TEXT_SHORTNER(content, 100)}</p>
        <p className="text-[.7rem] text-gray-500 flex items-center justify-between">
          <p>
            {date} . {min_to_read} min read .{" "}
            <span className="bg-gray-200 px-2 py-[2px] rounded-full font-light">
              {tags[1]}
            </span>
          </p>
          <BsBookmarkPlus size={20} color="gray" className="cursor-pointer" />
        </p>
      </div>
      <img
        className="w-[100px] h-[100px] sm:w-[150px] md:w-[200px] md:h-[150px]"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
        }
        alt=""
      />
    </div>
  );
}

export default BlogCard;
