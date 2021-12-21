import { useEffect, useState } from "react";
import { getBookInfo } from "../../apis/book";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const isbn = "9791163032212";

const BookDetail = () => {
  const { isbn } = useParams();
  //2. 1결과를 useState로 선언한 book에 변수로 담는다.
  const [book, setBook] = useState({});
  //북은 객채이기에 빈객체 {}를 초기값으로 넣는다.

  //1.init 함수를 만들고   await getBookInfo(params) 함수실행.
  const init = async () => {
    const params = { d_isbn: isbn };
    const result = await getBookInfo(params);
    setBook(result.items[0]);
  };

  //유즈이펙트함수 = 함수, 배열
  //3. 2에서 만든 함수를 useeffect로 실행한다.
  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <BookImage src={book.image} />
      <p>
        {book.title}
        {book.author}
      </p>
    </div>
  );
};

const BookImage = styled.img`
  width: 100px;
  height: 100px;
`;

export default BookDetail;

// author: "고경희"
// description: "웹 분야 1위! 그만한 이유가 있다!\n키보드를 잡고 실습하다 보면 \n웹 개발의 3대 기술이 끝난다!\n\n웹의 기본을 한 권으로 끝낼 수 있는 책이 탄생했다! 8년 연속 웹 분야 도서 1위인 《Do it! HTML5+CSS3 웹 표준의 정석》의 고경희 저자는 ‘HTML, CSS, 자바스크립트를 한 권으로’ 배우고 싶다는 많은 독자의... "
// discount: "27000"
// image: "https://bookthumb-phinf.pstatic.net/cover/177/644/17764401.jpg?type=m1&udate=20211207"
// isbn: "1163032212 9791163032212"
// link: "http://book.naver.com/bookdb/book_detail.php?bid=17764401"
// price: "30000"
// pubdate: "20210122"
// publisher: "이지스퍼블리싱"
// title: "Do it! HTML+CSS+자바스크립트 웹 표준의 정석 (한
