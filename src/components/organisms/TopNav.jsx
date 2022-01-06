import React, { useState, useRef, useEffect } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  ImgHome,
  ImgHomeStroke,
  ImgExplore,
  ImgAddPost,
  ImgActivity,
  ImgActivityFill,
  ImgInbox,
} from "../../assets/images/icons";

import { Magnifier } from "../../assets/images/icons";

import { ImgUserProfile } from "../../assets/images/profile";

import ProfileDropdown from "./ProfileDropdown";
import LikeDropdown from "./LikeDropdown";
import ModalAddPost from "../organisms/ModalAddPost";

const TopNav = () => {
  // 프로필 드롭다운1
  const [showDropdown, setShowDropdown] = useState(false);

  //엑티비티 드롭다운
  const [showActivity, setShowActivity] = useState(false);

  // 프로필 드롭다운2
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
              <CustomLink to="/main">
                <ActiveIcon>
                  {showActivity || showModal ? (
                    <ImgHomeStroke alt="빈홈" />
                  ) : (
                    <ImgHome alt="홈" />
                  )}
                </ActiveIcon>

                <InActiveIcon>
                  <ImgHomeStroke />
                </InActiveIcon>
              </CustomLink>
            </NavIconWrapper>

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
              <DropdownWrapper>
                {showActivity ? (
                  <ImgActivityFill
                    onClick={() => setShowActivity(false)}
                    alt="하트채움"
                  />
                ) : (
                  <ImgActivity
                    onClick={() => setShowActivity(true)}
                    alt="하트"
                  />
                )}
                {showActivity && <LikeDropdown />}
              </DropdownWrapper>
            </NavIconWrapper>

            <NavIconWrapper>
              <DropdownWrapper>
                <ImgProfile
                  ref={dropdownEl}
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                {showDropdown && <ProfileDropdown />}
              </DropdownWrapper>
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
  background: #efefef;
  border: none;
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
  font-size: 16px;
`;

const IconSearch = styled.span`
  background-image: url(${Magnifier});
  width: 16px;
  height: 16px;
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

const DropdownWrapper = styled.div`
  position: relative;
`;

const ActiveIcon = styled.span``;
const InActiveIcon = styled.span``;
const CustomLink = styled(NavLink)`
  ${ActiveIcon} {
    display: none;
  }

  &.active {
    ${ActiveIcon} {
      display: block;
    }
    ${InActiveIcon} {
      display: none;
    }
  }
  //커스텀링크중 active가 붙은 자식요소만 선택
  //활성화시 엑티브가 출력 인엑티브는 숨김
`;

export default TopNav;
