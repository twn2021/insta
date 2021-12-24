import React from "react";
import styled from "styled-components";
// import { Id1, Id2, Id3 } from "../../assets/images/profile";

// Main.js에서 프롭스로 전달해준 data를 받아와서 비구조화 활당해준다.
//비구조화할당: 객체에서 값을 추출하는 문법 으로 {}를 사용한다.

const ShortsList = ({ data }) => {
  return (
    <div>
      <Container>
        {/* 맵함수 구조:   map(({}) => ()) */}
        {data.map(({ id, user: { name, profileImage } }) => (
          <Shorts key={id}>
            <ProfileImage src={profileImage} />
            <Username>{name}</Username>
          </Shorts>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  border: 1px solid #dbdbdb;
  padding: 16px;
  background: #fff;
  display: flex;
`;

const Shorts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 56px;
  height: 56px;
`;

const Username = styled.button`
  max-width: 74px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 16px;
`;

export default ShortsList;
