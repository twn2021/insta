import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

import {
  ImgDropdownSet,
  ImgBookMark,
  ImgDropdownProfile,
} from "../../assets/images/icons";

const itemList = [
  {
    name: "프로필",
    image: <ImgDropdownProfile />,
    link: "/profile",
  },
  {
    name: "저장됨",
    image: <ImgBookMark width="16" height="16" />,
    link: "/profile/saved",
  },
  {
    name: "설정",
    image: <ImgDropdownSet />,
    link: "/account/edit",
  },
  {
    name: "계정전환",
    image: <ImgBookMark width="16" height="16" />,
    link: "/",
  },
];

const ProfileDropdown = () => {
  return (
    <Wrapper>
      <Box />
      <Container>
        {itemList.map(({ link, name, image }) => (
          <Link to={link}>
            <Item>
              {image}
              <ItemName>{name}</ItemName>
            </Item>
          </Link>
        ))}
        <HR />
        <Link to="/login">
          <Item>로그아웃</Item>
        </Link>
      </Container>
    </Wrapper>
  );
};

const ActiveIcon = styled.span``;
const InActiveIcon = styled.span``;

const Wrapper = styled.div`
  box-shadow: 0 0 5px 1px rgb(0 0 0 /10%);
  position: absolute;
  right: -20px;
  top: 40px;
  border-radius: 6px;
`;

const Box = styled.div`
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
  box-shadow: 0 0 5px 1px rgb(0 0 0 /10%);
  position: absolute;
  top: -6px;
  right: 25px;
  background: #fff;
`;

const Container = styled.div`
  position: relative;
  width: 230px;
  background: #fff;
  border-radius: 6px;
`;

const Item = styled.li`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  :hover {
    background-color: #fafafa;
  }
`;

const ItemName = styled.span`
  margin-left: 12px;
  display: flex;
`;

const HR = styled.li`
  background-color: #dbdbdb;
  border: 0;
  height: 1px;
  margin: 0;
`;

export default ProfileDropdown;
