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
      className={`border-b-[1px] border-black bg-y ${
        exceed ? "bg-white" : ""
      } flex items-center justify-between sticky top-0`}
    >
      <LogoWithName />
      <nav>
        <Button className={exceed ? "bg-g" : ""}>Get started</Button>
      </nav>
    </Container>
  );
}

export default UnAuthNav;
