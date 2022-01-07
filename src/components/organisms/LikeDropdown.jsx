import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const LikeDropdown = ({ onClose }) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <Wrapper>
        <Header>프로필</Header>
        <Body>문구</Body>
        <Footer>컨텐츠</Footer>
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
  background: #fff;
  position: absolute;
  z-index: 13;
`;

const Header = styled.div``;

const Body = styled.div``;

const Footer = styled.div``;

export default LikeDropdown;
