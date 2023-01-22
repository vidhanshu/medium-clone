import { BsFacebook } from "react-icons/bs";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import Input from "./Input";
import SeperatorWithTitle from "./SeperatorWithTitle";

type AuthOptionsProps = {
  isSignUp: boolean;
  onChange: () => void;
};
function AuthOptions({ isSignUp, onChange }: AuthOptionsProps) {
  return (
    <div className="flex flex-col gap-y-10 items-center">
      <h1 className="font-ci text-5xl font-bold text-center">Join Medium</h1>
      {isSignUp ? (
        <form className="flex flex-col items-center gap-y-3">
          <Input placeholder="Username" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button>Sign up</Button>
        </form>
      ) : (
        <form className="flex flex-col items-center gap-y-3">
          <Input placeholder="Username or Email" type="text" />
          <Input placeholder="Password" type="password" />
          <Button>Sign up</Button>
        </form>
      )}
      <SeperatorWithTitle>Or</SeperatorWithTitle>
      <div className="flex flex-col gap-y-2">
        <div className="cursor-pointer border-[1px] rounded-full items-center flex gap-x-2 w-[15rem] p-3 pl-5 text-sm">
          <FcGoogle size={20} /> Sign up with Google
        </div>
        <div className="cursor-pointer border-[1px] rounded-full items-center flex gap-x-2 w-[15rem] p-3 pl-5 text-sm">
          <BsFacebook size={20} color="#2291FF" /> Sign up with Facebook
        </div>
      </div>
      <h1>
        {isSignUp ? "Already have an account?" : "No account?"}
        <span className="font-bold text-g cursor-pointer" onClick={onChange}>
          {isSignUp ? " Sign in" : " Create one"}
        </span>
      </h1>
      <p className="text-xs text-gray-500">
        Click “Sign Up” to agree to Medium’s
        <span className="underline">Terms of Service</span> and acknowledge that
        Medium’s <span className="underline">Privacy Policy</span> applies to
        you.
      </p>
    </div>
  );
}

export default AuthOptions;
