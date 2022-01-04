import React from "react";
import styled from "styled-components";

const Index = () => {
  return (
    <List>
      <Item>
        <Image src="https://cdn.topstarnews.net/news/photo/201802/364393_7891_3546.jpg" />
      </Item>
      <Item>
        <Image src="https://www.kyeonggi.com/news/photo/201908/2146933_936687_5050.jpg" />
      </Item>
      <Item>
        <Image src="https://cdn.topstarnews.net/news/photo/201802/364393_7891_3546.jpg" />
      </Item>
    </List>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 31%);
  grid-gap: 2%;
`;

const Item = styled.div`
  padding-top: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export default Index;
