import React from "react";
import styled from "styled-components";
import { ImgUserProfile } from "../../assets/images/profile";

const MainRight = ({ data }) => {
  return (
    <>
      <Container>
        <Head>
          <ImgMyProfile />
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

          <Users>
            {data.map(({ id, user: { name, profileImage, info } }) => (
              <Shorts key={id}>
                <ImgProfile src={profileImage} />
                <Info>
                  <Id>{name}</Id>
                  <Name>{info}</Name>
                </Info>
                <BtnOtherId>팔로우</BtnOtherId>
              </Shorts>
            ))}
          </Users>
        </Body>
        <Footer>
          <InfoAssemble>
            <ul>
              <li>소개</li>
              <li>•</li>
              <li>도움</li>
              <li>•</li>
              <li>채용정보</li>
              <li>•</li>
              <li>홍보</li>
              <li>•</li>
              <li>API</li>
              <li>•</li>
              <li>위치</li>
            </ul>
          </InfoAssemble>
          <CopyRight>@ 2022 WANSTAGRAM FROM TWN</CopyRight>
        </Footer>
      </Container>
    </>
  );
};

const ImgMyProfile = styled.img`
  background-image: url(${ImgUserProfile});
  background-size: 56px;
  background-position: center;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  min-width: 56px;
`;

const ImgProfile = styled.img`
  background-size: 56px;
  background-position: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
const Container = styled.div`
  height: 500px;
  background: #fafafa;
  position: sticky;
  top: 110px;
`;

const Head = styled.div`
  display: flex;
`;

const Info = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 12px;
  flex: 1;
`;

const Id = styled.div`
  color: #262626;
  font-weight: 600;
  font-size: 14px;
`;
const Name = styled.div`
  color: #8e8e8e;
  font-size: 14px;
`;
const BtnOtherId = styled.button`
  font-size: 12px;
  line-height: 16px;
  margin: -2px 0 -3px;
  color: #0095f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const Body = styled.div``;
const Recommend = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  padding-bottom: 4px;
  padding-top: 4px;
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
const Users = styled.div`
  padding: 8px 0 8px;
`;

const Footer = styled.div``;

const Shorts = styled.div`
  display: flex;
  padding-bottom: 8px;
  padding-top: 8px;
  padding-left: 8px;
`;

const InfoAssemble = styled.div`
  color: #c7c7c7;
  font-size: 11px;
  max-width: 100%;
  margin-bottom: 16px;
  ul {
    li {
      display: inline-block;
      margin: 0 2.7px;
    }
  }
`;

const CopyRight = styled.div`
  color: #c7c7c7;
  font-size: 11px;
`;

export default MainRight;
