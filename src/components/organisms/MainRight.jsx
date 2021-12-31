import React from "react";
import styled, { css } from "styled-components";
import { imgUserProfile } from "../../assets/images/profile";

const MainRight = ({ data }) => {
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

          <Users>
            {data.map(({ id, user: { name, profileImage, info } }) => (
              <Shorts key={id}>
                <ImgUserProfile src={profileImage} small />
                <Info>
                  <Id>{name}</Id>
                  <Name>{info}</Name>
                </Info>
                <BtnOtherId>팔로우</BtnOtherId>
              </Shorts>
            ))}
          </Users>
        </Body>
        <Footer></Footer>
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

  //해드의 이미지프로필 속성을 기대로 쓰기위해서 가져오고
  // 스타일컴포넌트 css를 적용해서 부모요소를 상속후 변경함.
  ${({ small }) =>
    small &&
    css`
      width: 32px;
      height: 32px;
    `}
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
  font-weight: 600;
`;

const Body = styled.div``;
const Recommend = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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

const Shorts = styled.div`
  display: flex;
`;

export default MainRight;
