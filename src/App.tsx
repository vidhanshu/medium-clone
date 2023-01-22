import { AuthHome, UnAuthHome } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UnAuthHome />} />
      <Route path="/home" element={<AuthHome />} />
    </Routes>
  );
}

export default App;
