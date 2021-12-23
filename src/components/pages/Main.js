import React from "react";
import styled from "styled-components";
import TopNav from "../organisms/TopNav";
import ShortsList from "../organisms/ShortsList";
import PostList from "../organisms/PostList";

const Main = () => {
  return (
    <div>
      <TopNav />
      <PageWrapper>
        <Left>
          <ShortsList />
          <PostList />
        </Left>
        <Right></Right>
      </PageWrapper>
    </div>
  );
};

const PageWrapper = styled.div`
  padding-top: 90px;
  max-width: 975px;
  margin: 0 auto;
`;
const Left = styled.div``;
const Right = styled.div``;

export default Main;
