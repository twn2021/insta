import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieList, Pagination } from "../organisms";
import { getMovieList } from "../../apis/movie";

//앞에 국가표기
const countryList = [
  { code: "ALL", name: "전체" },
  { code: "KR", name: "한국" },
  { code: "US", name: "미국" },
  { code: "JP", name: "일본" },
];

const Movie = () => {
  const [isLoading, setisLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [country, setCountry] = useState(countryList[0].code);
  //기본값을 컨트리리스트의 첫번째 목록으로 지정해준다.

  //유즈이펙트는 안에있는 함수를 렌더링할때마다 부과적으로 실행하는 함수인데.
  //렌더링 때마다가 아니라 실행할 조건을 안에서 정해줄수있다.
  useEffect(() => {
    //쿼리가 있을때만 실행되게 함
    if (query) {
      searchList();
    }
  }, [page, query, country]);
  //페이지 나 쿼리가 변경이 있을때 서치리스트를 실행해라.

  const handleChange = (e) => {
    setValue(e.target.value);
    // 검색 입력값
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 프리벤트디폴트는 이벤트가 처리되지 않는 이상 이벤트에 대한 기본동작을 실행하지 않도록 막는다.
    setPage(1);
    setQuery(value);
  };

  const onChange = (e) => {
    setCountry(e.target.value);
    setPage(1);
  };

  // async 는 비동기 코드를 호출하는 함수.
  // async 에서 반환되는 값은 promise 가 된다.
  // 프로미스는 자바스크립트 비동기 처리에 사용되는 객체이고
  // 비동기 라는것은 코드실행이 완료될때까지 기다리지 않고 선실행 하는 특징
  //await는 프로미스를 반환하는 함수를 호출
  const searchList = async () => {
    const start = (page - 1) * 10 + 1;
    const parmas = { query, start };
    if (country !== "ALL") {
      parmas.country = country;
    } //파라미터에 컨트리를 빼고. 조건문으로 컨트리가 ALL이 아니면 컨트리를 삽입.
    setisLoading(true);
    const { items, total } = await getMovieList(parmas);
    setisLoading(false);
    setMovieList(items);
    setTotal(total);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <select onChange={onChange}>
          {countryList.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
          ;
        </select>

        <InputQuery placeholder="검색어를 입력하세요" onChange={handleChange} />
        <button>검색</button>
      </Form>
      {isLoading ? (
        <h3>loading...</h3>
      ) : (
        <>
          <MovieList data={movieList} />
          {/* 무비리스트 데이터를 무비리스트.jsx로 넘겨준다. */}
          <Pagination
            total={total}
            onChange={(page) => setPage(page)}
            nowPage={page}
          />
        </>
      )}

      {/* 페이지네이션에 토탈 값을 보낸다. / 페이지값을 나우페이지란 이름으로 페이지네이션에 보낸다. */}
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

export default Movie;
