import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./assets/pages/Notes";
import LoginRegister from "./assets/pages/LoginRegister";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Notes />} path="/" />
        <Route element={<LoginRegister />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
