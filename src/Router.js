import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, Main, Landing, EditProfile } from "./components/pages";
import {
  TopNav,
  ProfileIndex,
  ProfileSaved,
  ProfileTagged,
} from "./components/organisms";

const Router = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Landing />} />
{/* 중첩라우팅 (Outlet) 자식라우터 생성시 해당 jsx에 Outlet 을 선언해줘야 자식라우터가 출력됨*/}       
        <Route path="/" element={<TopNav />}>
          <Route path="main" element={<Main />} />
          <Route path="profile" element={<EditProfile />}>
            <Route index element={<ProfileIndex />} />
            <Route path="saved" element={<ProfileSaved />} />
            <Route path="tagged" element={<ProfileTagged />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* 라우터 패치 네임은 소문자로 시작해야함 */}
    </BrowserRouter>
  );
};

export default Router;
