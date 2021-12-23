import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImgHome, Magnifier, Profile } from "../../assets/images/icons";

const TopNav = () => {
  return (
    <Header>
      <HeadWrapper>
        <Link to="/">
          <LogoImage src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"></LogoImage>
        </Link>
        <SearchWrapper>
          <IconSearch />
          <SearchInput placeholder="검색" />
        </SearchWrapper>
        <Nav>
          <NavIconWrapper>
            <ImgHome />
          </NavIconWrapper>
          <NavIconWrapper>
            <ImgHome />
          </NavIconWrapper>
          <NavIconWrapper>
            <ImgHome />
          </NavIconWrapper>
          <NavIconWrapper>
            <ImgHome />
          </NavIconWrapper>
          <NavIconWrapper>
            <ImgHome />
          </NavIconWrapper>
          <NavIconWrapper>
            <ImgProfile />
          </NavIconWrapper>
        </Nav>
      </HeadWrapper>
    </Header>
  );
};

const Header = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  height: 54px;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
`;
const HeadWrapper = styled.div`
  max-width: 975px;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoImage = styled.img`
  padding-top: 8px;
  width: 104px;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  height: 36px;
  width: 268px;
  min-width: 125px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  position: relative;
  //부모요소에 포지션릴레이티브를 줘야 자식의 돋보기 위치 조절가능.
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  height: 100%;
  margin-left: 36px;
  margin-top: 1px;
`;

const IconSearch = styled.span`
  background-image: url(${Magnifier});
  width: 12px;
  height: 12px;
  display: inline-block;
  background-size: cover;
  position: absolute;
  top: 11px; ////////////////탑 ??
  left: 12px;
`;
const NavIconWrapper = styled.div`
  & + & {
    margin-left: 22px;
  }
`;

const Nav = styled.div`
  display: flex;
  padding-left: 24px;
`;

const ImgProfile = styled.img`
  background-image: url(${Profile});
  background-size: 28px;
  background-position: center;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

export default TopNav;
