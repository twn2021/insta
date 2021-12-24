import React from "react";
import styled from "styled-components";
import {
  ImgHome,
  Magnifier,
  Profile,
  Compass,
  Add,
  Heart,
  Paperplane,
} from "../../assets/images/icons";

import { Lee1 } from "../../assets/images/contents";

const PostList = () => {
  return (
    <Container>
      <Post>
        <Nav>
          <Header>
            <ProfileImage src={Profile} />
            <UserId>dfdsfdsf</UserId>
          </Header>
          <OptBtn />
        </Nav>
        <Body>
          <Contents src={Lee1} />
        </Body>

        {/* <Body />
        <Section>
          <Left>
            <Btn1 />
            <Btn2 />
            <Btn3 />
          </Left>
          <Right>
            <Btn4 />
          </Right>
        </Section> */}
      </Post>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #dbdbdb;
  background: #fff;
  display: flex;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
`;

const Nav = styled.div``;
const Header = styled.div``;
const ProfileImage = styled.img``;
const UserId = styled.div``;
const OptBtn = styled.div``;

const Body = styled.div``;
const Contents = styled.img``;

export default PostList;
