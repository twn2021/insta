import styled from "styled-components";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginLeft } from "../organisms";
import {
  PageWarapper,
  Box,
  InputTextWrapper,
  InputText,
  BtnSubmitWrapper,
  BtnSubmit,
} from "../atoms/login";
import { Logo, Or } from "../molecules/login";

const Login = () => {
  // const [actuveIndex, setActiveIndex] = useState;

  // useEffect(() => {
  //   const changeActiveIndex = () => {
  //     const nextIndex = activeIndex + 1;
  //     setActiveIndex(nextIndex);
  //   };
  //   setInterval(changeActiveIndex, 2000);
  // }, []);

  return (
    <>
      <PageWrapper>
        <Main>
          <LoginLeft />
          <Right>
            <Box>
              <Logo />
            </Box>
            <From>
              <InputTextWarapper>
                <InputText placeholder="전화번호, 사용자 이름 또는 이메일" />
              </InputTextWarapper>
              <InputTextWarapper>
                <InputText placeholder="비밀번호" />
              </InputTextWarapper>
              <BtnSubmitWarapper>
                <BtnSubmit>로그인</BtnSubmit>
              </BtnSubmitWarapper>
              <Or />
              <FacebookLogin>Facebook으로 로그인</FacebookLogin>
              <ForgetPassword>비밀번호를 잊으셨나요?</ForgetPassword>
            </From>
            <Box>
              <SignupWarapper>
                계정이 없으신가요? <Link to="/signup">가입하기</Link>
              </SignupWarapper>
            </Box>
          </Right>
        </Main>
        <Footer>dddddddddddddddd</Footer>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  height: 618px;
  width: 454px;
  background-image: url(https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png);
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

const Box = styled.div`
  border: 1px solid #dbdbdb;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const From = styled.div``;

const InputTextWarapper = styled.div`
  border: 1px solid #dbdbdb;
  background: #fafafa;
  border-radius: 3px;
  padding: 8px;
  margin: 0 40px 6px;
`;

const InputText = styled.input`
  width: 100%;
  background: transparent;
  border: none;
`;

const Pw = styled.input`
  width: 270px;
  height: 30px;
  border-radius: 4px;
  background: #fafafa;
`;
const BtnSubmit = styled.button`
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

const BtnSubmitWarapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 40px;
`;

const OrLine = styled.div`
  height: 1px;
  flex: 1;
  background: #dbdbdb;
`;
const OrSpan = styled.div`
  margin: 0 18px;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  color: #8e8e8e;
`;

const FacebookLogin = styled.div`
  color: #385185;
`;
const FindPw = styled.div`
  font-size: 12px;
  color: #00376b;
  margin-top: 12px;
`;

const SignupWarapper = styled.div``;

const Footer = styled.div``;

export default Login;
