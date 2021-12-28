import React from "react";
import styled from "styled-components";
import {
  ImgBookMark,
  ImgActivity,
  ImgInbox,
  ImgMore,
  ImgComment,
  Profile,
} from "../../assets/images/icons";

// import PostImageList from ..

const PostList = ({ data }) => {
  return (
    <List>
      <Post>
        <Top>
          <TopProfileWrapper>
            <TopProfile src={Profile} />
          </TopProfileWrapper>
          <TopUserName>sdfsdf</TopUserName>
          <BtnMore>
            <ImgMore />
          </BtnMore>
        </Top>

        <ImageList>
          <Image src="" />
        </ImageList>
        <IconWrapper>
          <IconLeft>
            <ImgActivity />
            <ImgComment />
            <ImgInbox />
          </IconLeft>
          <IconRight>
            <ImgBookMark />
          </IconRight>
        </IconWrapper>
      </Post>
    </List>

    // <Container>
    //   <Post>
    //     <Nav>
    //       <Header>
    //         <ProfileImage src={Profile} />
    //         <UserId>dfdsfdsf</UserId>
    //       </Header>

    //       <CommentWrapper>

    //         {replys.items.map({id, user, content}) => (
    //           <Comment key={id}>
    //             <CommnetUserName>{user.name}</CommnetUserName>
    //             &nbsp;
    //             <CommentContent>{content}</CommentContent>
    //           </Comment>
    //         ))}

    //       </CommentWrapper>
  );
};

const List = styled.div``;

const Post = styled.div`
  border: 1px solid #dbdbdb;
  background: #fff;
  margin-bottom: 24px;
`;

const Top = styled.div`
  padding: 14px 16px;
  display: flex;
  align-items: center;
`;

const TopProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TopProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const TopUserName = styled.div`
  margin-left: 12px;
  color: #262626;
  font-weight: 600;
  font-size: 14px;
  flex: 1;
`;

const BtnMore = styled.button`
  background: none;
  display: flex;
  align-items: center;
`;

const ImageList = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 16px;
`;

const IconLeft = styled.div``;

const IconRight = styled.div``;

export default PostList;
