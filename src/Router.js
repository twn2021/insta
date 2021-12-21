import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
