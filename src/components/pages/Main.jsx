import React from "react";
import styled from "styled-components";
import { ShortsList, PostList, MainRight } from "../organisms";

import shortsList from "../../datas/shorts";
import postList from "../../datas/posts";
import mainRight from "../../datas/mainRight";

const Main = () => {
  return (
    <div>
      <Page>
        <PageWrapper>
          <Left>
            <ShortsList data={shortsList} />
            {/* ShortList.jsx 에게  data란 이름의 Props로 shortList를 보내준다 */}
            {/*프롭스는 상위 컴포넌트가 하위 컴포넌트에 속성을 전달하는것*/}
            <PostList data={postList} />
          </Left>
          <Right>
            <MainRight data={mainRight} />
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
  justify-content: center;
`;
const Left = styled.div`
  margin-right: 28px;
  max-width: 614px;
  width: 100%;
  //이미지가 1장 이상일때. 첫장만 100%로 나오고 넘기면 이미지 위치가 틀어진다.
  //자바스크립트로 해결해야함. css에서는 불가
`;
const Right = styled.div`
  flex: 1;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export default Main;
