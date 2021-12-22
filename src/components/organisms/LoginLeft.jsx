import styled from "styled-components";
import { React, useState, useEffect } from "react";

const imageList = [
  "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
];

const LoginLeft = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const changeIndex = () => {
      const nextIndex =
        activeIndex === imageList.length - 1 ? 0 : activeIndex + 1;

      // let nextIndex;
      // if( activeindex === imageList.length-1) {
      //     nextIndex = 0;
      // } else {
      //     nextIndex = activeIndex +1;
      // } 이 문구를 위의 삼항연산자로 변경함 !!


      setActiveIndex(nextIndex);
    };

    setTimeout(changeIndex, 4000);
  }, [activeIndex]);

  return (
    <Wrapper>
      <ImageList>
        {imageList.map((image, i) => (
          <Image src={image} active={activeIndex === i} />
        ))}
      </ImageList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
// pages -> login.jsx에서 가져온 left를 이름변경
  height: 618px;
  width: 454px;
  background-image: url(https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png);
`;

const ImageList = styled.div`
  position: relative;
`;
const Image = styled.img`
  position: absolute;
  top: 100px;
  left: 150.5px;
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: 2s opacity ease-in;
`;


export default LoginLeft;
