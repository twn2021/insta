import React from "react";
import styled from "styled-components";
import {
  ImgBookMark,
  ImgActivity,
  ImgInbox,
  ImgMore,
  ImgComment,
  ImgImoticon,
} from "../../assets/images/icons";

import { PostImageList } from ".";

const PostList = ({ data }) => {
  // datas -> main.js ->  posts.js -> PostList.jsx
  return (
    <List>
      {data.map(
        ({ id, created_at, content, user, name, imageList, likes, replys }) => (
          <Post key={id}>
            <Top>
              <TopProfileWrapper>
                <TopProfile src={user.profileImage} />
              </TopProfileWrapper>
              <TopUserName>{user.name}</TopUserName>
              <BtnMore>
                <ImgMore />
              </BtnMore>
            </Top>

            <PostImageList data={imageList} />
            {/* PostImageList.jsx 에 data라는 이름으로 보내준다. */}

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

            <LikeWrapper>좋아요 {likes.total}개</LikeWrapper>

            <CommentWrapper>
              <Comment>
                <CommentUserName>{user.name}</CommentUserName>
                &nbsp;
                <CommentContent>{content}</CommentContent>
              </Comment>
              {replys.items.map(({ id, user, content }) => (
                // 비구조화 활당 {} reply.을 생략할수 있다.
                <Comment key={id}>
                  <CommentUserName>{user.name}</CommentUserName>
                  &nbsp;
                  <CommentContent>{content}</CommentContent>
                </Comment>
              ))}
            </CommentWrapper>
            <DateTimeWrapper>{created_at}</DateTimeWrapper>
            <AddCommentWrapper>
              <BtnImoticon>
                <ImgImoticon />
              </BtnImoticon>
              <CommentTextarea rows="1" placeholder="댓글달기..." />
              <BtnCommentSubmit>게시</BtnCommentSubmit>
            </AddCommentWrapper>
          </Post>
        )
      )}
    </List>
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
const BtnCommentSubmit = styled.button`
  color: #0095f6;
  font-weight: 600;
`;

export default PostList;
