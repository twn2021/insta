import React from "react";
import styled from "styled-components";
import { ImgUserProfile } from "../../assets/images/profile";
import { ImgOption, ImgMovie, ImgTag, ImgPosting, ImgBookMark } from "../../assets/images/icons";

const EditProfile = () => {
  return (
    <UserProfile>
      <Header>

      <ImgProfile>
        <ImgMyProfile />
      </ImgProfile>

      <InfoProfile>
          <IdEdit>
            <IdName>twn2018</IdName>
            <IdEditButton>프로필 편집</IdEditButton>
            <ImgOp>
             <ImgOption />
            </ImgOp>
          </IdEdit>
        <PostEdit>
            <Span>게시물 968</Span>
            <Span>팔로워 50</Span>
            <Span>팔로우 310</Span>
        </PostEdit>
        <LinkEdit>
            <SpanId>TWNaka태와니</SpanId>
            <SpanLink>youtube.com/channel/UCny-kSQtqJWU246Nf6AUTlQ</SpanLink>
        </LinkEdit>
      </InfoProfile>

      </Header>

      <Content>
        <Nav>
          <Span><ImgPosting />게시물</Span>
          <Span><ImgMovie />동영상</Span>
          <Span><ImgBookMark width="12px" heigth="12px"/>저장됨</Span>
          <Span><ImgTag />태그됨</Span>
        </Nav>
      </Content>
    </UserProfile>
  );
};

const UserProfile = styled.div`
padding: 30px 20px 0;
margin: 0 0 30px;
`;

const Header = styled.div`
display: flex;
`;

const InfoProfile = styled.div`
display: flex;
flex-direction: column;
`;

const ImgProfile = styled.div`
display: flex;
`;

const ImgMyProfile = styled.img`
  background-image: url(${ImgUserProfile});
  width: 150px;
  height: 150px;
  background-position: center; 
  background-size: 155px;
  border-radius: 50%;
  margin: 0px 30px 0px 0px;
`;

const IdEdit = styled.div`
display: flex;
margin: 0 0 20px;

`;
const IdName = styled.div`
  font-size: 28px;
`;
const IdEditButton = styled.div`
display: flex;
align-items: center;
border: 1px solid #dbdbdb;
border-radius: 4px;
color: #262626;
padding: 5px 9px;
cursor: pointer;
font-weight: 600;
margin-left: 30px;
`;

const ImgOp = styled.div`
padding: 8px;
margin-left: 10px;
`;

const PostEdit = styled.div`
display: flex;
margin: 0 0 20px;

span{
  margin-right: 50px;
}
`;
const LinkEdit = styled.div`
display: flex;
flex-direction: column;
`;

const SpanId = styled.span`
display: inline;
font-weight: 600;
`;

const SpanLink = styled.span`
color: #00376b;
font-weight: 600;
`;

const Span = styled.span``;

const Content = styled.div`
display: flex;

`;
const Nav = styled.div`
flex: 1;
border-top: 1px solid #8e8e8e;

span{
font-size: 12px;
font-weight: 600;
color: #8e8e8e;
align-items: center;
justify-content: space-between;
}
`;

export default EditProfile;
