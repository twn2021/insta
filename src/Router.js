import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, Main, Landing, EditProfile } from "./components/pages";
import {
  TopNav,
  ProfileIndex,
  ProfileSaved,
  ProfileTagged,
} from "./components/organisms";

//라투터에 폴더이름을 쓰면 자동으로 해당폴더의 인덱스 파일을 가져오게 된다.

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<TopNav />}>
          <Route path="main" element={<Main />} />
          <Route path="profile" element={<EditProfile />}>
            <Route index element={<ProfileIndex />} />
            {/* path가 profile일때 ProfileIndex */}
            <Route path="saved" element={<ProfileSaved />} />
            <Route path="tagged" element={<ProfileTagged />} />
          </Route>
          {/* 리엑트 라우터의 Outlet 사용하여 링크주소 사용 */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* 라우터 패치 네임은 소문자로 시작해야함 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
