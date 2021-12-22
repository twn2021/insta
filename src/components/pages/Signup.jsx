import styled from "styled-components";
import { Link } from "react-router-dom";
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

const Signup = () => {


    return (
        <PageWrapper>
            <MainWrapper>
            <Main>
                <Box>
                    <Logo />
                    <form>
                        <Massage>친구들의 사진과 동영상을 보려면 가입하세요.</Massage>
                        <BtnSubmitWrapper>
                            <BtnSubmit>Facebook으로 로그인</BtnSubmit>
                        </BtnSubmitWrapper>
                        <Or />
                        <InputTextWrapper>
                            <InputText placeholder="휴대폰 번호 또는 이메일 주소" />
                        </InputTextWrapper>
                        <InputTextWrapper>
                            <InputText placeholder="성명" />
                        </InputTextWrapper>
                        <InputTextWrapper>
                            <InputText placeholder="사용자 이름" />
                        </InputTextWrapper>
                        <InputTextWrapper>
                            <InputText placeholder="비밀번호" />
                        </InputTextWrapper>
                        <BtnSubmitWrapper>
                            <BtnSubmit>가입</BtnSubmit>
                        </BtnSubmitWrapper>
                    </form>
                    <Or />
                </Box>
                {/* 박스안에 들어가면 하나로 뭉침  */}
                <Box>
                    <LoginWrapper>계정이 있으신가요? <Link to="/login">로그인</Link>
                    </LoginWrapper>
                </Box>
            </Main>
            </MainWrapper>
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