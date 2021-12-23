import styled from "styled-components";

const Or = () => {

    return (
    <Orwrapper>
        <OrLine />
        <OrSpan>또는</OrSpan>
        <OrLine />
    </Orwrapper>
    );
};


const Orwrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 40px 18px;
`;

const OrLine = styled.div`
height: 1px;
flex: 1;
background: #dbdbdb;
`;

const OrSpan = styled.span`
margin: 0 18px;
font-size: 13px;
font-weight: 600;
line-height: 15px;
color: #8e8e8e;
`;

export default Or;