import React from "react";
import styled from "styled-components";

//  무비.jsx 에서 data 파일을 받아옴
const MovieList = ({ data }) => {
  return (
    <List>
      {data.map(({ director, image, pubDate, title, userRating, link }) => (
        <a href={link} target="_blank" rel="noreferrer" key={link}>
          {/* 아이템 안의 속성을 누르면 새창에서 링크를 띄우는 테그 */}
          <Items>
            <Img>
              <Image src={image} />
            </Img>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <Director>{director}</Director>
            <p>
              개봉일:{pubDate} / 평점:{userRating}
            </p>
          </Items>
        </a>
      ))}
    </List>
  );
};

const Items = styled.div``;
const Img = styled.div`
  height: 280px;
  border: 1px solid gray;
  overflow: hidden;
`;
const Director = styled.div``;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.p``;

export default MovieList;
