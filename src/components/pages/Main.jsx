import React from "react";
import styled from "styled-components";
import { TopNav, ShortsList, PostList, MainRight } from "../organisms";

import shortsList from "../../datas/shorts";
import postList from "../../datas/posts";

const Main = () => {
  return (
    <div>
      <Page>
        <TopNav />
        <PageWrapper>
          <Left>
            <ShortsList data={shortsList} />
            {/* ShortList.jsx 에게  data란 이름의 Props로 shortList를 보내준다 */}
            {/*프롭스는 상위 컴포넌트가 하위 컴포넌트에 속성을 전달하는것*/}
            <PostList data={postList} />
          </Left>
          <Right>
            <MainRight />
          </Right>
        </PageWrapper>
      </Page>
    </div>
  );
};
const Page = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;

const PageWrapper = styled.div`
  padding-top: 90px;
  max-width: 975px;
  margin: 0 auto;
  display: flex;
`;
const Left = styled.div`
  margin-right: 28px;
  max-width: 614px;
`;
const Right = styled.div`
  flex: 1;
`;

export default Main;
