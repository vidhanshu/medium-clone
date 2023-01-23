import { AuthHome, UnAuthHome, WriteABlog } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UnAuthHome />} />
      <Route path="/home" element={<AuthHome />} />
      <Route path="/write" element={<WriteABlog />} />
    </Routes>
  );
}

export default App;
