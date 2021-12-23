import styled from "styled-components";

export const Box = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const InputTextWrapper = styled.div`
  border: 1px solid #dbdbdb;
  background: #fafafa;
  border-radius: 3px;
  padding: 8px;
  margin: 0 40px 6px;
`;

export const InputText = styled.input`
  background: transparent; //백그라운드 투명
  border: none;
  width: 100%;
`;

export const BtnSubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 40px;
`;

export const BtnSubmit = styled.button`
  background-color: #0095f6;
  border-radius: 4px;
  color: #fff;
  border: 1px solid transparent;
  padding: 5px 9px;
`;

export const PageWrapper = styled.div`
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  // 부모요소에 플렉스를 주고 자식요소에 플랙스 1을 주면
  // 부모요소를 제외하고 남은 부분에을 모조리 자식요소가 체운다
  flex-direction: column;
  // 자식요소가 옆으로 오는것을 중앙정렬
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
