import styled from "styled-components";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import {
  PageWrapper,
  Main,
  Box,
  InputTextWrapper,
  InputText,
  BtnSubmitWrapper,
  BtnSubmit,
} from "../atoms/login";
import { Logo, Or } from "../molecules/login";
import { signup } from "../../apis/user";

const Signup = () => {
  const [signupData, setSignupData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...signupData, [name]: value };
    //대괄호로 인해 변수 네임이 키값으로 들어간다.
    //사인업 데이터에 네임값이 있으면 벨류 값으로 덮어써진다.
    setSignupData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user_name, password, passwordConfirm } = signupData;
    if (user_name.length < 4) {
      return alert("아이디가 너무 짧습니다.");
    }
    if (passwordConfirm !== password) {
      return alert("비밀번호가 다릅니다...");
    }

    signup(signupData);
  };

  return (
    <PageWrapper>
      <Main>
        <MainWrapper>
          <Box>
            <Logo />
            <form onSubmit={handleSubmit}>
              <Massage>친구들의 사진과 동영상을 보려면 가입하세요.</Massage>
              <BtnSubmitWrapper>
                <BtnSubmit>Facebook으로 로그인</BtnSubmit>
              </BtnSubmitWrapper>
                <Or />
              <InputTextWrapper>
                <InputText
                  placeholder="성명"
                  name="name"
                  onChange={handleChange}
                  required //아무것도 없을때 가입누르면 경고창 뜨게함.
                />
              </InputTextWrapper>
              <InputTextWrapper>
                <InputText
                  placeholder="사용자 이름"
                  name="user_name"
                  onChange={handleChange}
                  required
                />
              </InputTextWrapper>
              <InputTextWrapper>
                <InputText
                  placeholder="비밀번호"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </InputTextWrapper>
              <InputTextWrapper>
                <InputText
                  placeholder="비밀번호 확인"
                  type="password"
                  name="passwordConfirm"
                  onChange={handleChange}
                  required
                />
              </InputTextWrapper>
              <BtnSubmitWrapper>
                <BtnSubmit>가입</BtnSubmit>
              </BtnSubmitWrapper>
            </form>
          </Box>
          {/* 박스안에 들어가면 하나로 뭉침  */}
          <Box>
            <LoginWrapper>
              계정이 있으신가요? <Link to="/login">로그인</Link>
            </LoginWrapper>
          </Box>
        </MainWrapper>
      </Main>
    </PageWrapper>
  );
};

// 가로 사이즈가 너무 작음. 350이 안먹힘
const MainWrapper = styled.div`
  width: 350px;
`;

const LoginWrapper = styled.div`
  text-align: center;
  font-size: 14px;
  margin: 15px;
`;

const Massage = styled.div`
  color: #8e8e8e;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 40px 10px;
  text-align: center;
`;

export default Signup;
