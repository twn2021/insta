import React from "react";
import styled from "styled-components";
import { ImgUserProfile } from "../../assets/images/profile";
import {
  ImgOption,
  ImgMovie,
  ImgTag,
  ImgPosting,
  ImgBookMark,
} from "../../assets/images/icons";
import { Outlet, NavLink } from "react-router-dom";

const EditProfile = () => {
  return (
    <UserProfile>
      <Header>
        <ImgProfile>
          <ImgMyProfile />
        </ImgProfile>

        <InfoProfile>
          <IdEdit>
            <IdName>twn2018</IdName>
            <IdEditButton>프로필 편집</IdEditButton>
            <ImgOp>
              <ImgOption />
            </ImgOp>
          </IdEdit>
          <PostEdit>
            <Dl>
              <Dt>게시물&nbsp;</Dt>
              <Dd>968</Dd>
              <Dt>팔로워&nbsp;</Dt>
              <Dd>50</Dd>
              <Dt>팔로우&nbsp;</Dt>
              <Dd>310</Dd>
            </Dl>
          </PostEdit>
          <LinkEdit>
            <SpanId>TWNaka태와니</SpanId>
            <SpanLink>youtube.com/channel/UCny-kSQtqJWU246Nf6AUTlQ</SpanLink>
          </LinkEdit>
        </InfoProfile>
      </Header>

      <Content>
        <Nav>
          <CustomLink end to="/profile">
            <Menu>
              <ImgPosting />
              게시물
            </Menu>
          </CustomLink>

          <CustomLink to="/profile/saved">
            <Menu>
              <ImgBookMark width="12" />
              저장됨
            </Menu>
          </CustomLink>

          <CustomLink to="/profile/tagged">
            <Menu>
              <ImgTag />
              태그됨
            </Menu>
          </CustomLink>
        </Nav>
      </Content>

      <Outlet />
    </UserProfile>
  );
};

const UserProfile = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  padding: 30px 20px 0;
  margin: 0 0 30px;
`;

const Header = styled.div`
  display: flex;
`;

const InfoProfile = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ImgProfile = styled.div`
  flex-grow: 2;
  display: flex;
`;

const ImgMyProfile = styled.img`
  background-image: url(${ImgUserProfile});
  width: 150px;
  height: 150px;
  background-position: center;
  background-size: 155px;
  border-radius: 50%;
  margin: 0px 30px 0px 0px;
`;

const IdEdit = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px;
`;
const IdName = styled.div`
  font-size: 28px;
  color: #262626;
  line-height: 32px;
  font-weight: 300;
`;

const IdEditButton = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #262626;
  padding: 5px 9px;
  cursor: pointer;
  font-weight: 600;
  margin-left: 30px;
`;

const ImgOp = styled.div`
  padding: 8px;
  margin-left: 10px;
`;

const PostEdit = styled.div`
  margin: 0 0 20px;

  span {
    margin-right: 50px;
  }
`;
const LinkEdit = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpanId = styled.span`
  display: inline;
  font-weight: 600;
`;

const SpanLink = styled.div`
  color: #00376b;
  font-weight: 600;
`;

const Menu = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
`;

const CustomLink = styled(NavLink)`
  &.active {
    color: #262626;
  }
`;

const Dl = styled.dl`
  font-size: 16px;
  display: flex;
`;
const Dt = styled.dt``;
const Dd = styled.dd`
  font-weight: 600;
  margin: 0;
  margin-right: 40px;
`;

const Content = styled.div``;
const Nav = styled.div`
  border-top: 1px solid #8e8e8e;
  color: #8e8e8e;
  font-size: 12px;

  span {
    font-size: 12px;
    font-weight: 600;
    color: #8e8e8e;
    align-items: center;
    justify-content: space-between;
  }
`;

export default EditProfile;
