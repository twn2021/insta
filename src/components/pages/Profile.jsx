import React from "react";
import styled from "styled-components";
import { ImgUserProfile } from "../../assets/images/profile";
import {
  ImgOption,
  ImgTag,
  ImgPosting,
  ImgBookMark,
  ImgTagFill,
  ImgBookMarkFill,
} from "../../assets/images/icons";
import { Outlet, NavLink } from "react-router-dom";
//리엑트라우터돔의 부과기능인 NavLink는
//현재 경로와 링크에 사용하는 경로가 일치하는 경우 스타일을 적용할수 있는 컴포넌트

const Profile = () => {
  return (
    <UserProfile>
      <PageMain>
        <Header>
          <LeftProfile>
            <ImgMyProfile />
          </LeftProfile>

          <RightProfile>
            <IdEdit>
              <IdName>twn2018</IdName>
              <IdEditButton>프로필 편집</IdEditButton>
              <ImgOp>
                <ImgOption />
              </ImgOp>
            </IdEdit>
            <PostEdit>
              <DL>
                <DT>게시물&nbsp;</DT>
                <DD>968</DD>
                <DT>팔로워&nbsp;</DT>
                <DD>50</DD>
                <DT>팔로우&nbsp;</DT>
                <DD>310</DD>
              </DL>
            </PostEdit>

            <LinkEdit>
              <SpanId>TWNaka태와니</SpanId>
              <SpanLink>youtube.com/channel/UCny-kSQtqJWU246Nf6AUTlQ</SpanLink>
            </LinkEdit>
          </RightProfile>
        </Header>

        <Content>
          {/* NavLink 첫페이지는 end to 로 지정 */}
          <CustomLink end to="/profile">
            <Menu>
              <ImgPosting />
              게시물
            </Menu>
          </CustomLink>

          <CustomLink to="/profile/saved">
            <Menu>
              <ActiveIcon>
                <ImgBookMarkFill width="12" height="12" />
              </ActiveIcon>{" "}
              <InActiveIcon>
                <ImgBookMark width="12" height="12" />
              </InActiveIcon>{" "}
              저장됨
            </Menu>
          </CustomLink>

          <CustomLink to="/profile/tagged">
            <Menu>
            <ActiveIcon>
            <ImgTagFill/>
             </ActiveIcon>
            <InActiveIcon>
              <ImgTag/>
            </InActiveIcon>
             
              <ImgTag />
              태그됨
            </Menu>
          </CustomLink>
        </Content>
        <Outlet />
      </PageMain>
    </UserProfile>
  );
};

const UserProfile = styled.div`
  /* 페이지 */
  background-color: #fafafa;
  min-height: 100vh;
`;

const PageMain = styled.main`
  /* 페이지메인 */
  max-width: 935px;
  box-sizing: content-box;
  margin: 0 auto;
  margin-top: 60px;
  padding: 30px 20px 0;
`;

const Header = styled.main`
  /* 헤더 */
  display: flex;
  margin-bottom: 44px;
`;

const LeftProfile = styled.div`
  /* 헤더레프트 */
  flex-grow: 1;
  text-align: center;
  justify-content: center;
`;

const ImgMyProfile = styled.img`
  background-image: url(${ImgUserProfile});
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const RightProfile = styled.div`
  /*헤더라이트*/
  flex-grow: 2;
`;

const IdEdit = styled.div`
  /* 헤더라이트1 */
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const IdName = styled.span`
  /* 유저네임 */
  font-size: 28px;
  color: #262626;
  line-height: 32px;
  font-weight: 300;
`;

const IdEditButton = styled.div`
  /* 버튼에딧 */
  border: 1px solid #dbdbdb;
  font-weight: 600;
  border-radius: 4px;
  color: #262626;
  padding: 5px 9px;
  cursor: pointer;
  margin-left: 20px;
`;

const ImgOp = styled.div`
  padding: 8px;
  margin-left: 10px;
`;

const PostEdit = styled.div`
  /* 해더라이트2 */
  margin-bottom: 20px;
`;

const DL = styled.dl`
  font-size: 16px;
  display: flex;
`;
const DT = styled.dt``;
const DD = styled.dd`
  font-weight: 600;
  margin: 0;
  margin-right: 40px;
`;

const LinkEdit = styled.div`
  /* 해더라이트3 */
`;

const SpanId = styled.span`
  /* 네임 */
  font-weight: 600;
  font-size: 16px;
`;

const SpanLink = styled.div`
  color: #00376b;
  font-weight: 600;
`;

const Content = styled.nav`
  // 메뉴바
  display: flex;
  justify-content: center;
  border-top: 1px solid #dbdbdb;
  a + a {
    margin-left: 60px;
  }

  /* 게시물과 보더탑이 붙어 있어서 마진탑을 주면 
  A+A 에 넣으면 저장됨과 태그됨만 적용이 됨 ???????????????????????????*/
`;

const Menu = styled.div`
  /* 메뉴 */
  height: 52px;
  display: flex;
  justify-content: center;
`;

const ActiveIcon = styled.span``;
const InActiveIcon = styled.span``;

const CustomLink = styled(NavLink)`
  font-size: 12px;
  color: #8e8e8e;
  ${ActiveIcon} {
      display: none;
    }
 
  &.active {
    margin-top: -1px;
    color: #0067bb;
    font-weight: 600;
    border-top: 1px solid #262626;
    ${ActiveIcon} {
      display: block;
    }
    ${InActiveIcon} {
      display: none;
    }
  }
`;


// 탑네브 네브링크 상속받아옴



export default Profile;
