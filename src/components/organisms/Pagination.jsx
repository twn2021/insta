import React from "react";
import styled, { css } from "styled-components";

const Pagination = ({ total, onChange, nowPage }) => {
  // 프룹스로 받아온 온체인지. 무비jsx에서 page를 받아왔다.
  // 프룹스로 받아올때는 {} 대괄호에 붙여준다.
  const lastPage = Math.ceil(total / 10); //올림
  const startPage = Math.floor((nowPage - 1) / 10) * 10 + 1;
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;
  // 마지막 페이지가 2개일때 무조건 9를 더하면 없는 페이지가 나오므로
  const pageList = [];

  //   1~10:1
  //   11~20:11
  //   91~100:91
  //   101~110:101

  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  return (
    <PageList>
      {nowPage > 1 && (
        <BtnPage onClick={() => onChange(nowPage - 1)}>이전</BtnPage>
      )}
      {pageList.map((page) => (
        <BtnPage
          key={page}
          onClick={() => onChange(page)}
          active={page === nowPage}
          //엑티브는 페이지 값이 나우페이지와 같으면 Css를 변경해줄려고 만든 이름 엑티브가 투루가 됨
        >
          {page}
        </BtnPage>
      ))}
      {nowPage < lastPage && (
        <BtnPage onClick={() => onChange(nowPage + 1)}>다음</BtnPage>
      )}
    </PageList>
  );
};

const PageList = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnPage = styled.button`
  border-radius: 5px;

  ${(props) =>
    props.active &&
    //엑티브라는 프룹스가 참일때 아래의 css가 실행된다.
    css`
      background: #d9ff00;
    `}
`;

export default Pagination;
