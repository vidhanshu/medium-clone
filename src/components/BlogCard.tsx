const PROFILE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU";

type BlogCardProps = {
  id: number;
  title: string;
  profile?: string;
  date?: string;
  min_to_read: number;
  user: {
    name: string;
    profile_image: string;
  };
  blog_image: string;
};
function BlogCard({ min_to_read, title, date, user }: BlogCardProps) {
  return (
    <div className="flex gap-x-2 justify-between">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <img
            width={20}
            height={20}
            className="rounded-full"
            src={PROFILE}
            alt="profile"
          />
          <p className="text-sm">{user.name}</p>
        </div>
        <h1 className="text-base font-bold">{title}</h1>
        <p className="text-sm text-gray-500">
          {date} . {min_to_read} min read
        </p>
      </div>
      <img
        className="w-[120px] h-[120px]"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
        }
        alt=""
      />
    </div>
  );
}

export default BlogCard;
