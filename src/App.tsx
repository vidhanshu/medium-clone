import { AuthHome, Profile, UnAuthHome, WriteABlog } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UnAuthHome />} />
      <Route path="/home" element={<AuthHome />} />
      <Route path="/write" element={<WriteABlog />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
