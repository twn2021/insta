import React from "react";
import styled from "styled-components";
import { imgUserProfile } from "../../assets/images/profile";

const MainRight = () => {
  return (
    <>
      <Container>
        <Head>
          <ImgUserProfile />
          <Info>
            <Id>twn2018</Id>
            <Name>TWNaka태와니</Name>
          </Info>
          <BtnOtherId>전환</BtnOtherId>
        </Head>
        <Body>
          <Recommend>
            <Span>회원님을위한 추천</Span>
            <BtnAll>모두보기</BtnAll>
          </Recommend>
          <Users></Users>
        </Body>
        <Footer></Footer>
        메인라이트 스스로 퍼블리싱할것
      </Container>
    </>
  );
};
const ImgUserProfile = styled.img`
  background-image: url(${imgUserProfile});
  background-size: 56px;
  background-position: center;
  border-radius: 50%;
  width: 56px;
  height: 56px;
`;
const Container = styled.div`
  height: 500px;
  background: #fff;
  position: sticky;
  top: 90px;
`;

const Head = styled.div`
  display: flex;
`;

const Info = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin: 0 0 0 12px;
`;

const Id = styled.div`
  color: #262626;
  font-weight: 600;
`;
const Name = styled.div`
  color: #8e8e8e;
`;
const BtnOtherId = styled.button`
  font-size: 12px;
  line-height: 16px;
  margin: -2px 0 -3px;
  color: #0095f6;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Body = styled.div``;
const Recommend = styled.div`
  display: flex;
`;

const Span = styled.div`
  color: #8e8e8e;
  font-weight: 600;
  font-size: 14px;
`;

const BtnAll = styled.button`
  font-size: 12px;
  font-weight: 600;
`;
const Users = styled.div``;

const Footer = styled.div``;

export default MainRight;
