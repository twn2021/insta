import React from "react";
import styled from "styled-components";

const PostList = () => {
  return (
    <div>
      <Post></Post>
    </div>
  );
};

const Post = styled.div`
  background: red;
  width: 300px;
`;

export default PostList;
