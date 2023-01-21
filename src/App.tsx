import { Route, Routes } from "react-router-dom";

import AuthHome from "./pages/AuthHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthHome />} />
    </Routes>
  );
}

export default App;
