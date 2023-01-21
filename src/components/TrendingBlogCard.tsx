const PROFILE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU";

type TrendingBlogCardProps = {
  id: number,
  title: string;
  profile?: string;
  date?: string;
  min_to_read: number;
  user: {
    name: string;
    profile_image: string;
  };
};
function TrendingBlogCard({
  id,
  min_to_read,
  title,
  date,
  user,
}: TrendingBlogCardProps) {
  return (
    <div className="flex gap-x-4">
      <div className="basis-[110px] text-5xl text-slate-300">0{id}</div>
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
    </div>
  );
}

export default TrendingBlogCard;
