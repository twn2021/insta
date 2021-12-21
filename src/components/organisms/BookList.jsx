import React from "react";
import styled from "styled-components";

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ author, image, pubdate, title, publisher, link }) => (
        <a href={link} target="_blank" rel="noreferrer" key={link}>
          <Items>
            {Date.map(({image, title, isbn}) => 
            
            
            
            )}
          <Itme Key = {isbn} />
          
            <Link to = {`/book/${isbn.split("")[1]}`}>
             <Image src={image} />
            </Link>

            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <Director>{author}</Director>
            <p>
              {pubdate} / {publisher}
            </p>
          </Items>
        </a>
      ))}
    </List>
  );
};

const Director = styled.div``;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  border: 1px solid gray;
`;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.p``;

const Items = styled.div`
  border: 1px solid gray;
`;

export default BookList;
