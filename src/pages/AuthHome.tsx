import { AuthNav, CategorySlider, Container } from "../components";

import { TRENDING_TOPICS } from "../constants";

function AuthHome() {
  return (
    <>
      <AuthNav />
      <Container className="py-0">
        <CategorySlider categories={TRENDING_TOPICS} />
      </Container>
    </>
  );
}

export default AuthHome;
