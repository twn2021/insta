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
                <Link to="/main">
                  <BtnSubmit>로그인</BtnSubmit>
                </Link>
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

      <Footer>
        <Line1>
          <p>Meta</p>
          <p>소개</p>
          <p>블로그</p>
          <p>채용 정보</p>
          <p>도움말</p>
          <p>API</p>
          <p>개인정보처리방침</p>
          <p>약관</p>
          <p>인기 계정</p>
          <p>해시태그</p>
          <p>위치</p>
          <p>Instragram Lite</p>
        </Line1>
        <Line2>
          <p>뷰티</p>
          <p>댄스</p>
          <p>피트니스</p>
          <p>식음료</p>
          <p>집 및 정원</p>
          <p>음악</p>
          <p>시각 예술</p>
        </Line2>
        <Line3>
          <p>한국어</p>
          <p>@2022 instagram from Meta</p>
        </Line3>
      </Footer>
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
  font-weight: 600;
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

  a {
    color: #0095F6;
    font-weight: 600;
  }
`;

const Footer = styled.div`
display: block;
color: #8E8E8E;
font-size: 12px;
margin-top: 24px;
margin-bottom: 52px;
@media (max-width: 800px) {
  display: none;
}
`;

const Line1 = styled.div`
display: flex;
justify-content: center;
p {
margin-left: 8px;
margin-right: 8px;
margin-bottom: 12px;
}
`;

const Line2 = styled.p`
display: flex;
justify-content: center;
p {
margin-left: 8px;
margin-right: 8px;
margin-bottom: 12px;
}
`;

const Line3 = styled.p`
display: flex;
justify-content: center;
margin: 12px 0 12px 0;
`;

export default Login;
