import { BsMedium } from "react-icons/bs";

type LogoWithNameProp = {
  mode?: "light" | "dark";
};
function LogoWithName({ mode = "dark" }: LogoWithNameProp) {
  return (
    <div className="flex items-center gap-x-2">
      <BsMedium size={45} color={mode === "light" ? "white" : "black"} />
      <h1
        className={`font-ssp font-semibold text-3xl ${
          mode === "light" ? "text-white" : "text-black"
        }`}
      >
        Medium
      </h1>
    </div>
  );
}

export default LogoWithName;
