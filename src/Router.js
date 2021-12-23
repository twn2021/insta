import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, Main } from "./components/pages";

//라투터에 폴더이름을 쓰면 자동으로 해당폴더의 인덱스 파일을 가져오게 된다.

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
