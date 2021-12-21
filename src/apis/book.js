import axios from "axios";

export const getBookList = async (params) => {
  // 엑시오스는 에이싱크어웨이트 를 써야 사용할수 있다.
  const result = await axios.get("/v1/search/book.json", {
    headers: {
      "X-naver-Client-Id": "Jz0N1kHcRza8pGkJzdTb",
      "X-naver-Client-Secret": "7x_Ovkpt0b",
      //네이버 오픈 api 아이디와 비번
    },
    params,
  });

  return result.data;
};

export const getBookInfo = async (params) => {
  const result = await axios.get("/v1/search/book_adv.json", {
    headers: {
      "X-naver-Client-Id": "Jz0N1kHcRza8pGkJzdTb",
      "X-naver-Client-Secret": "7x_Ovkpt0b",
    },
    params,
  });

  return result.data;
};
