import React from "react";
import styled from "styled-components";
import { ImgUserProfile } from "../../assets/images/profile";
import { ImgOption } from "../../assets/images/icons";

const EditProfile = () => {
  return (
    <UserProfile>
      <Header>
        <ImgMyProfile />
        <Section>
          <IdEdit>
            <h2>twn2018</h2>
            <IdEditButton>프로필 편집</IdEditButton>
            <ImgOption />
          </IdEdit>
          <PostEdit>
            <Span>게시물 968</Span>
            <Span>팔로워 50</Span>
            <Span>팔로우 310</Span>
          </PostEdit>
          <LinkEdit>
            <h1>TWNaka태와니</h1>
            <Span>youtube.com/channel/UCny-kSQtqJWU246Nf6AUTlQ</Span>
          </LinkEdit>
        </Section>
      </Header>
      <Content>
        <Nav></Nav>
      </Content>
    </UserProfile>
  );
};

const UserProfile = styled.div``;
const Header = styled.div``;
const Section = styled.div``;
const Content = styled.div``;
const Nav = styled.div``;
const ImgMyProfile = styled.img`
  background-image: url(${ImgUserProfile});
`;

const IdEdit = styled.div``;
const IdEditButton = styled.div``;
const PostEdit = styled.div``;
const LinkEdit = styled.div``;
const Span = styled.span``;

export default EditProfile;
