import React, { useState, useRef, useEffect } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  ImgHome,
  ImgExplore,
  ImgAddPost,
  ImgActivity,
  ImgInbox,
} from "../../assets/images/icons";

import { Magnifier } from "../../assets/images/icons";

import { ImgUserProfile } from "../../assets/images/profile";

import ProfileDropdown from "./ProfileDropdown";
import ModalAddPost from "../organisms/ModalAddPost";

const TopNav = () => {
  // 프로필 드롭다운
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownEl = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownEl.current && !dropdownEl.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, [dropdownEl]);

  //새 게시물 모달
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header>
        <HeadWrapper>
          <Link to="/">
            <LogoImage src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"></LogoImage>
          </Link>
          <SearchWrapper>
            <IconSearch alt="돋보기" />
            <SearchInput placeholder="검색" />
          </SearchWrapper>
          <Nav>
            <NavIconWrapper>
              <Link to="/Main">
                <ImgHome alt="홈" />
              </Link>
            </NavIconWrapper>

            {/* <ActiveIcon>
              <ImgHome />
            </ActiveIcon>
            <InActiveIcon>
              <ImgHomeStroke />
            </InActiveIcon> */}

            <NavIconWrapper>
              <ImgInbox alt="다이렉트메시지" />
            </NavIconWrapper>

            <NavIconWrapper>
              <ImgAddPost
                onClick={() => setShowModal(true)}
                alt="새로운게시물"
              />
            </NavIconWrapper>

            <NavIconWrapper>
              <ImgExplore alt="사람찾기" />
            </NavIconWrapper>

            <NavIconWrapper>
              <ImgActivity alt="활동피드" />
            </NavIconWrapper>

            <NavIconWrapper>
              {/* <DropdoownWrapper>
                <ImgActivityFill onclick={() => setShowActivity(false)} />
                ref={dropdownEl}>
                <ImgProfile onClick={() => setShowDropdown(!showDropdown)} />
                {showDropdown && <ProfileDropdown />}
              </DropdoownWrapper> */}
            </NavIconWrapper>
          </Nav>
        </HeadWrapper>
      </Header>
      {showModal && <ModalAddPost onClose={() => setShowModal(false)} />}
      {/* 모달에드포스트jsx에 onClose라는 이름의 프롭스로 setshowmodal을 false로 만들어주는 함수를 보내준다 */}

      <Outlet />
    </>
  );
};

const Header = styled.div`
  background: #fff;
  position: fixed;
  z-index: 100;
  /* 메인페이지의 이미지컨텐츠가 탑네브 뒤로 가도록 제트인덱스 줌 */
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
  top: 11px;
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
  background-image: url(${ImgUserProfile});
  background-size: 28px;
  background-position: center;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

const DropdoownWrapper = styled.div`
  position: relative;
`;

export default TopNav;
