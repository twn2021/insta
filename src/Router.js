import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./components/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sigup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
