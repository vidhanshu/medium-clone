import { useEffect, useState } from "react";

import Button from "./Button";
import Container from "./Container";
import LogoWithName from "./LogoWithName";

function UnAuthNav() {
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
      className={`border-b-[1px] border-black bg-y ${exceed ? "bg-white" : ""} sticky top-0 z-10`}
      classInnerName={`flex items-center justify-between`}
    >
      <LogoWithName />
      <nav className="flex items-center gap-x-4">
        <ul className="flex text-sm gap-x-4">
          <li className="hidden sm:block">Our story</li>
          <li className="hidden md:block">Membership</li>
          <li className="hidden md:block">Write</li>
          <li className="hidden md:block">Sign In</li>
        </ul>
        <Button className={exceed ? "bg-g" : ""}>Get started</Button>
      </nav>
    </Container>
  );
}

export default UnAuthNav;
