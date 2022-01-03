import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, Main, Landing, EditProfile } from "./components/pages";

//라투터에 폴더이름을 쓰면 자동으로 해당폴더의 인덱스 파일을 가져오게 된다.

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/editProfile" element={<EditProfile />} />
        {/* 라우터 패치 네임은 소문자로 시작해야함 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
