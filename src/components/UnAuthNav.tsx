import { useEffect, useState } from "react";

import Button from "./Button";
import Container from "./Container";
import LogoWithName from "./LogoWithName";

type UnAuthNavProps = {
  openModal: () => void;
  setSignIn: () => void;
};
function UnAuthNav({ openModal, setSignIn }: UnAuthNavProps) {
  const [exceed, setExceed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setExceed(true);
      } else {
        setExceed(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Container
      className={`border-b-[1px] border-black bg${
        exceed ? "-white" : "-y"
      } sticky top-0 z-10`}
      classInnerName={`flex items-center justify-between`}
    >
      <LogoWithName />
      <nav className="flex items-center gap-x-4">
        <ul className="flex text-sm gap-x-4">
          <li className="hidden sm:block cursor-pointer">Our story</li>
          <li className="hidden md:block cursor-pointer">Membership</li>
          <li
            className="hidden md:block cursor-pointer"
            onClick={() => {
              setSignIn();
              openModal();
            }}
          >
            Write
          </li>
          <li
            className="hidden md:block cursor-pointer"
            onClick={() => {
              setSignIn();
              openModal();
            }}
          >
            Sign In
          </li>
        </ul>
        <Button onClick={openModal} className={exceed ? "bg-g" : ""}>
          Get started
        </Button>
      </nav>
    </Container>
  );
}

export default UnAuthNav;
