import styled from "styled-components";
import { useState, React } from "react";

const PostImageList = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleIndex = (n) => setActiveIndex((prev) => prev + n);
  return (
    <Wrapper>
      <ImageList activeIndex={activeIndex}>
        {data.map(({ id, image }) => (
          <Image key={id} src={image} />
        ))}
      </ImageList>

      {activeIndex > 0 && (
        <BtnPrev onClick={() => handleIndex(-1)}>{"<"}</BtnPrev>
      )}
      {/* 0보다 클때만 이전버튼이 나온다 */}
      {activeIndex !== data.length - 1 && (
        <BtnNext onClick={() => handleIndex(1)}>{">"}</BtnNext>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  position: relative;
`;
const ImageList = styled.ul`
  display: flex;
  align-items: center;
  transform: ${({ activeIndex }) => `translateX(${-612 * activeIndex}px)`};
  transition: transform 0.5s ease-in;
`;
const Image = styled.img`
  min-width: 100%;
`;

const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  opacity: 0.7;
`;

const BtnNext = styled(Btn)`
  right: 15px;
`;
const BtnPrev = styled(Btn)`
  left: 15px;
`;

export default PostImageList;
