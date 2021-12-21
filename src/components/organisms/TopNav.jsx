import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const linkList = [
  { link: "/", name: "메인" },
  { link: "/movie", name: "영화" },
  { link: "/book", name: "책" },
];

const TopNav = () => {
  let { pathname } = useLocation();
  if (pathname === "/") return <></>;
  //패스네임이 아무것도 없으면 빈칸을 리턴한다.

  return (
    <Container>
      <Nav>
        <LinkList>
          {linkList.map(({ link, name }) => (
            <Link to={link} key={link}>
              <LinkItem active={link === pathname}>{name}</LinkItem>
              {/* 링크값이 패스네임과 같으면 엑티브로 css 실행됨 */}
            </Link>
          ))}
        </LinkList>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
const Nav = styled.nav``;
const LinkList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;
const LinkItem = styled.li`
  margin: 0 10px;
  background: ${({ active }) => active && "black"};
  color: ${({ active }) => active && "white"};
`;

export default TopNav;
