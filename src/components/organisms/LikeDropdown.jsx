import styled from "styled-components";
import React from "react";
// import { Link } from "react-router-dom";
import  { Wh, Rok}  from "../../assets/images/profile";

import {
  BtnFollow,
} from "../atoms/login";


const LikeDropdown = ({ onClose }) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <Wrapper>
      <Box />
      <Container >
          <Header>
            <Pic/>
          </Header>
          <Body>대한민국 청와대 님이 회원님을 팔로우하기 시작했습니다. </Body>
          <Footer>
            <BtnFollow>팔로우</BtnFollow>
          </Footer>
      </Container >
      <Container >
          <Header>
            <Pic/>
          </Header>
          <Body>대한민국 청와대 님이 회원님의 게시물을 좋아합니다. </Body>
          <Footer>
          <BtnFollow>팔로우</BtnFollow>
          </Footer>
      </Container >

      </Wrapper>
    </>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
`;

const Wrapper = styled.div`
  box-shadow: 0 0 5px 1px rgb(0 0 0 /10%);
  position: absolute;
  right: -20px;
  top: 40px;
  border-radius: 6px;
  z-index: 13;
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
  width: 480px;
  background: #fff;
  border-radius: 6px;
  display: flex;
  padding: 12px 16px;
  align-items: center;
`;

const Header = styled.div`
display: flex;
`;

const Pic = styled.img`
width:44px;
height: 44px;
background-image: url(${Wh});
border-radius: 50%;
background-position: center;
background-size: 44px;

`;

const Body = styled.div`
font-size: 14px;
line-height: 18px;
padding-left: 5px;
margin-left: -5px;
`;

const Footer = styled.div`
width: 44px;
height: 44px;
`;

export default LikeDropdown;
