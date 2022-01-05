import styled from "styled-components";
import { ImgModalBack } from "../../assets/images/icons";
import { useRef, useState } from "react";

const ModalAddPost = ({ onClose }) => {
  // 탑네브jsx에서 프롭스로 받아온 셋모달을 펄스로 바꿔주는 함수 = onClose

  const [imageData, setImageData] = useState(null);
  //5. useState로 컴포넌트 내에서 imageData를 출력하게하고
  //6. setImageData함수로 실행
  

  const fileEl = useRef(null);
  // input file을 담아주는 useRef
  // useRef는 컴포넌트안에서 조회 및 수정할수 있는 변수를 관리해준다.
  // 컴포넌트 내부에 변수를 선언하면 내부상태가 변할때마다 다시 렌더링되며 값이 초기화된다.
  // useRef로 관리되는 변수는 값이 바뀌어도 컴포넌트가 리렌더링 되지 않는다..
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    //1.파일이 배열로 들어오므로 첫번째 파일을 지정
 
    const reader = new FileReader();
       //2.파일을 브라우저에 읽어오기 위해서 filereader객채를 사용

    reader.onloadend = () => {
      setImageData(reader.result);
    };
    //4.onloadend(읽기완료)되면 (reader.result)로 데이터URL을 가져옴

    reader.readAsDataURL(file);
    //3.읽어온 파일을 데이터URL로 읽어들여라
  };

  return (
    <>
      <Container>
        <Head>새 게시물 만들기</Head>
        <Main>
          <ImgModalBack />
          <Span>사진과 동영상을 여기에 끌어다 놓을수는 없어요.</Span>
          <Button onClick={() => fileEl.current.click()}>
            {/* 버튼을 클릭하면 fileEl을 클릭하는 함수를 실행시킨다. */}
            {/* fileEl은 input 테그이고 ref로 버튼과 인풋을 서로 연결시켜준것 */}
            컴퓨터에서 선택 <br/>
           <BtnSpan>(미리보기는 가능)</BtnSpan>
          </Button>
          <input
            type="file"
            ref={fileEl}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
          {/* style로 숨기고, accept로 이미지파일만 선택가능하게 지정 */}
          {/* 인풋테그로 파일을 선택하면 온체인지가 자동실행되는데 핸들체인지로 행동을 지정 */}
          {imageData && <PreviewImage src={imageData} />}
          {/* imageData 값이 있으면 PreviewImage 컴포넌트를 실행한다 */}

        </Main>
      </Container>
      <Backdrop onClick={onClose} />
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
  //정중앙
  z-index: 120;
  //탑네브 인덱스값 100이라서 덮어주기
  border-radius: 12px;
  //main 을 중앙정렬 시키기위해서 부모요소를 flex로 만들어줌
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  font-weight: 200;
  margin: 10px;
`;

const BtnSpan = styled.span`
  font-size: 8px;
  font-weight: 10;
`;


const Button = styled.button`
  color: #ffffff;
  background: #0095f6;
  border-radius: 4px;
  padding: 5px 9px;
  font-weight: 600;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000; 
  opacity: 0.8;
  z-index: 110;
  //탑네브 인덱스값 100이라서 덮어주기
  position: fixed;
`;

const Head = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  height: 43px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
//head부분을 제외한 나머지가 모두 main의 부분이되어야 중앙정렬 가능 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
//부모요소(head)에 플랙스를 주고 자식은 플랙스1을 가져와서 영약을 차지한다.
`;

const PreviewImage = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
`;

export default ModalAddPost;
