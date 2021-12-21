import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BookList, Pagination } from "../organisms";
import { getBookList } from "../../apis/book";

const Book = () => {
  //1. 검색 안하면 url 쿼리스트링에 검색어가 추가
  //2. 사이트에 들어왔을때 쿼리스트링에 검색어가 있으면 자동으로 검색

  const [isLoading, setisLoading] = useState(false);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const { query } = qs.parse(search.slice(1));
    setQuert(query);
    setValue(query);
  }, [search]);

  useEffect(() => {
    if (query) {
      searchList();
    }
  }, [page, query]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 새로고침방지
    setPage(1);
    setQuery(value);

    // const params = { query: query };
    // 객채 = {키값, 밸류}
    // 예제로 const person = {
    //   name: ['Bob', 'Smith'],
    //   age: 32,}
  };

  const searchList = async () => {
    const start = (page - 1) * 10 + 1;
    const parmas = { query, start };
    setisLoading(true);
    const { items, total } = await getBookList(parmas);
    setisLoading(false);
    setBookList(items);
    setTotal(total);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputQuery placeholder="검색어를 입력하세요" onChange={handleChange} />
        <button>검색</button>
      </Form>
      {isLoading ? (
        <h3>loading...</h3>
      ) : (
        <>
          <BookList data={bookList} />
          {/* 무비리스트 데이터를 무비리스트.jsx로 넘겨준다. */}
          <Pagination
            total={total}
            onChange={(page) => setPage(page)}
            nowPage={page}
          />
        </>
      )}
    </div>
  );
};

const Form = styled.form`
  display: flex;
  padding: 10px;
`;
const InputQuery = styled.input`
  flex: 1;
  margin-right: 10px;
`;

export default Book;
