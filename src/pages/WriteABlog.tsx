import { Container, Editor, WriteBlogNav } from "../components";

function WriteABlog() {
  return (
    <>
      <div className="sticky top-0 bg-white z-10">
        <WriteBlogNav />
      </div>
      <Container className="p-0 sm:p-4">
        <Editor />
      </Container>
    </>
  );
}

export default WriteABlog;
