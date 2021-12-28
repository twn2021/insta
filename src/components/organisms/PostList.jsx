import React from "react";
import styled from "styled-components";
import {
  ImgBookMark,
  ImgActivity,
  ImgInbox,
  ImgMore,
  ImgComment,
  Profile,
  Imoticon,
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
          <TopUserName>twn2018</TopUserName>
          <BtnMore>
            <ImgMore />
          </BtnMore>
        </Top>

        <ImageList>
          <Image src="https://www.nintendo.co.kr/front_images/news/878/250912857bdfb55325faf76ae65ad934.jpg" />
        </ImageList>
        <IconWrapper>
          <IconLeft>
            <BtnIcon>
              <ImgActivity />
            </BtnIcon>
            <BtnIcon>
             <ImgComment />
            </BtnIcon>
            <BtnIcon>
              <ImgInbox />
            </BtnIcon>
          </IconLeft>
          <IconRight>
            <BtnIcon>
              <ImgBookMark />
            </BtnIcon>
          </IconRight>
          </IconWrapper>

            <LikeWrapper>
                좋아요 5,444,232개
            </LikeWrapper>

            <CommentWrapper>
              <Comment>
                <CommentUserName>twn2018</CommentUserName>
                &nbsp;
                <CommentContent>크리스마스 선물 나는 사실 플스4가 가지고 싶었지만. 누구를 위한 선물인가..</CommentContent>
              </Comment>

              <Comment>
                <CommentUserName>댓글1</CommentUserName>
                &nbsp;
                <CommentContent>축하드려요</CommentContent>
              </Comment>
              <Comment>
                <CommentUserName>댓글2</CommentUserName>
                &nbsp;
                <CommentContent>부러워요</CommentContent>
              </Comment>

            </CommentWrapper>
            <DateTimeWrapper>
              1일 전
            </DateTimeWrapper>
            <AddCommentWrapper>
              <BtnImoticon>
                <Imoticon/>
              </BtnImoticon>
              <CommentTextarea rows="1" placeholder="댓글달기..."/>
              <BtnCommentSubmit>게시</BtnCommentSubmit>
            </AddCommentWrapper>
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

const Post = styled.article`
  border: 1px solid #dbdbdb;
  background: #fff;
  margin-bottom: 24px;
`;

const Top = styled.section`
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

const ImageList = styled.section``;

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

const BtnIcon = styled.button`
padding: 8px;
`;

const LikeWrapper = styled.section`
  font-weight: 600;
  color: #262626;
  font-size: 14px;
  padding: 0 16px;
  margin-bottom: 8px;
`;

const CommentWrapper = styled.section`
padding: 0 16px;
font-size: 14px;
`;

const Comment = styled.div`
margin-bottom: 4px;
`;
const CommentUserName = styled.span`
font-weight: 600;
`;
const CommentContent = styled.span``;


const DateTimeWrapper = styled.section`
padding: 16px;
margin-bottom: 16px;
color: #8e8e8e;
font-size: 10px;
`;

const AddCommentWrapper = styled.section`
border-top: 1px solid #efefef;
padding: 6px 16px;
display: flex;
align-items: center;
`;

const BtnImoticon = styled.button`
padding: 8px 16px 8px 0;

`;

const CommentTextarea = styled.textarea`
resize: none; 
/* 사이즈 조절못하게 */
flex: 1; 
/* 한칸을 모두 차지하게 */
border: none;
/* 칸 줄 없애기 */
`;
const BtnCommentSubmit= styled.button`
color: #0095f6;
font-weight: 600;
`;


export default PostList;
