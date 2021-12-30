import styled from "styled-components";
import { ImgModalBack } from "../../assets/images/icons";
import { useRef, useState } from "react";

const ModalAddPost = ({ onClose }) => {
  const [imageData, setImageData] = useState(null);
  // 탑네브jsx에서 프롭스로 받아온 셋모달을 펄스로 바꿔주는 함수 = onClose
  const fileEl = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setImageData(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Container>
        <Head>새 게시물 만들기</Head>
        <Main>
          <ImgModalBack />
          <Span>사진과 동영상을 여기에 끌어다 놓으세요.</Span>
          <Button onClick={() => fileEl.current.click()}>
            컴퓨터에서 선택
          </Button>
          <input
            type="file"
            ref={fileEl}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
          {/* 스타일로 숨기고, 이미지파일만 선택가능하게 지정 */}
          {imageData && <PreviewImage src={imageData} />}
        </Main>
      </Container>
      <BackDrop onClick={onClose} />
    </>
  );
};

const Container = styled.div`
  position: fixed;
  background: #fff;
  max-width: 620px;
  width: 70%;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 120;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0 0 0 / 85%);
  position: fixed;
  z-index: 110;
  border-radius: 12px;
`;

const Head = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dbdbdb;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 24px;
  border-top: 1px solid #262626;
  height: calc(100vmin - 219px);
  max-height: min(calc(100vw - 372px), 855px);
  max-width: min(calc(100vw - 372px), 855px);
  min-height: 348px;
  min-width: 348px;
  flex: 1;
`;
const Span = styled.span`
  font-size: 22px;
  line-height: 26px;
  margin: -4px 0 -5px;
  margin-top: 20px;
`;

const Button = styled.button`
  color: #ffffff;
  background: #0095f6;
  padding: 5px 9px;
  font-weight: 600;

  border: none;
  border-radius: 4px;
  height: 30px;

  box-sizing: border-box;
  margin-top: 20px;
`;

const PreviewImage = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
`;

export default ModalAddPost;
