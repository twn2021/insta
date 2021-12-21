import styled from "styled-components";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //   const [actuveIndex, setActiveIndex] = useState;

  //   useEffect(() => {
  //     const changeActiveIndex = () => {
  //       const nextIndex = activeIndex + 1;
  //       setActiveIndex(nextIndex);
  //     };
  //     setInterval(changeActiveIndex, 2000);
  //   }, []);

  return (
    <>
      <Main>
        <Article>
          <Left>
            <BackImg
              img
              src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
            />
          </Left>
          <Right>
            <Head>
              <h1>instagram</h1>
            </Head>
            <Info>
              <Id placeholder="전화번호, 사용자 이름 또는 이메일" />
              <Pw placeholder="비밀번호" />
              <LogBtn>로그인</LogBtn>
              <Other>
                <p>또는</p>
              </Other>
              <Facebook>Facebook으로 로그인</Facebook>
            </Info>
            <Link to="/signup">
              <FindPw>비밀번호를 잊으셨나요?dddd</FindPw>
            </Link>
          </Right>
        </Article>
      </Main>
      <Footer></Footer>
    </>
  );
};

const Main = styled.div``;
const Article = styled.div`
  display: flex;
  justify-content: center;
`;
const Right = styled.div`
  width: 350px;
  height: 382px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 350px;
  margin-top: 12px;
  border: 1px solid #dbdbdb;
`;
const Head = styled.div``;
const Info = styled.div`
  font-size: 16px;
`;
const Id = styled.input`
  width: 270px;
  height: 30px;
  border-radius: 4px;
  background: #fafafa;
`;

const Pw = styled.input`
  width: 270px;
  height: 30px;
  border-radius: 4px;
  background: #fafafa;
`;
const LogBtn = styled.button`
  margin-top: 8px;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 8px;
  color: white;
  width: 270px;
  height: 30px;
  background: #bfe6ff;
  border: none;
  border-radius: 4px;
`;
const Other = styled.div``;

const Facebook = styled.div`
  color: #385185;
`;
const FindPw = styled.div`
  font-size: 12px;
  color: #00376b;
  margin-top: 12px;
`;
const Left = styled.div``;
const BackImg = styled.img``;

const Footer = styled.div``;

export default Login;
