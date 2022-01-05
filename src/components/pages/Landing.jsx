import styled from "styled-components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div>
        <p>안녕</p>
        <p>이건 리엑트로 만들었지.</p>
      </div>
      <Link to="/Login">
      <EnterBtn>출발</EnterBtn>
      </Link>
    </div>
  );
};

const EnterBtn = styled.button`
background-color: #e5ff00;
font-size: 20px;
border-radius: 6px;
border: 2px solid #8a5e00;
`;

export default Landing;
