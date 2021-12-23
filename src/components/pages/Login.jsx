import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginLeft } from "../organisms";
import {
  PageWrapper,
  Box,
  InputTextWrapper,
  InputText,
  BtnSubmitWrapper,
  BtnSubmit,
  Main,
} from "../atoms/login";
import { Logo, Or } from "../molecules/login";

const Login = () => {
  return (
    <PageWrapper>
      <Main>
        <LoginLeft />
        <Right>
          <Box>
            <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
            <Form>
              <InputTextWrapper>
                <InputText placeholder="전화번호, 사용자 이름 또는 이메일" />
              </InputTextWrapper>
              <InputTextWrapper>
                <InputText placeholder="비밀번호" />
              </InputTextWrapper>
              <BtnSubmitWrapper>
                <BtnSubmit>로그인</BtnSubmit>
              </BtnSubmitWrapper>
              <Or />
              {/* 모큘 or.jsx로 보냄 */}
              <FacebookLogin>Facebook으로 로그인</FacebookLogin>
              <ForgetPassword>비밀번호를 잊으셨나요?</ForgetPassword>
            </Form>
          </Box>
          <Box>
            <SignupWrapper>
              계정이 없으신가요? <Link to="/signup">가입하기</Link>
            </SignupWrapper>
          </Box>
        </Right>
      </Main>
      <Footer>Footer!!!!</Footer>
    </PageWrapper>
  );
};

const Right = styled.div`
  width: 350px;
`;

const Form = styled.form``;

const FacebookLogin = styled.div`
  color: #385185;
  text-align: center;
  margin-top: 12px;
`;
const ForgetPassword = styled.div`
  color: #00376b;
  font-size: 12px;
  text-align: center;
  margin-top: 12px;
`;

const SignupWrapper = styled.div`
  margin: 15px;
  text-align: center;
`;

const Footer = styled.footer`
  text-align: center;
`;

export default Login;
