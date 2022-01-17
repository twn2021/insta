import styled from "styled-components";
import React from "react";
// import { Link } from "react-router-dom";
import  { Wh, Rok, Kkw}  from "../../assets/images/profile";


const LikeDropdown = ({ onClose }) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <Wrapper>
      <Box />
      <FollowBox>
        <Container >
            <Header>
              <Pic src={Wh}/>
            </Header>
            <Body>대한민국 청와대 님이 회원님을 팔로우하기 시작했습니다. </Body>
            <Footer>
              <BtnFollow>팔로우</BtnFollow>
            </Footer>
        </Container >
        <Container >
            <Header>
              <Pic src={Rok}/>
            </Header>
            <Body>국방부님이 회원님의 게시물을 좋아합니다. </Body>
            <Footer>
            <BtnFollow>팔로우</BtnFollow>
            </Footer>
        </Container >
        <Container >
            <Header>
              <Pic src={Kkw}/>
            </Header>
            <Body>국민권익위님이 댓글에서 회원님을 언급했습니다. </Body>
            <Footer>
            <BtnFollow>팔로우</BtnFollow>
            </Footer>
        </Container >
      </FollowBox>
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

const FollowBox = styled.div`
  position: relative;
  width: 480px;
  background: #fff;
  border-radius: 6px;
`;

const Container = styled.div`
  width: 480px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
`;

const Header = styled.div`
display: flex;
`;

const Pic = styled.img`
width:44px;
height: 44px;
border-radius: 50%;
background-position: center;
background-size: 44px;
`;

const Body = styled.div`
font-size: 14px;
line-height: 18px;
margin: 0 12px;
display: flex;
flex: 1;
`;

const Footer = styled.div`
display: flex;
align-items: center;
text-align: center;
`;

export const BtnFollow = styled.button`
  background-color: #0095f6;
  border-radius: 4px;
  color: #fff;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 5px 9px;
  width: 64px;
`;





export default LikeDropdown;
