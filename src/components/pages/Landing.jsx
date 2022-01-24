import styled from "styled-components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
  
    <Wrap>
      <div>
        <p>REACT로 만든 인스타그램 입니다.</p>
      </div>
        <Link to="/Login">
        <EnterBtn>출발</EnterBtn>
        </Link>
    </Wrap>
  );

};

const Wrap = styled.div`
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
`;


const EnterBtn = styled.button`
background-color: #e5ff00;
font-size: 20px;
border-radius: 6px;
border: 2px solid #8a5e00;
`;

export default Landing;
