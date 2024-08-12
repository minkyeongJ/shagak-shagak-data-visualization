import { useParams } from "react-router-dom";

const D3jsPractice = () => {
  let { id } = useParams();
  return <div>{id}번 실전예제 페이지 입니다.</div>;
};

export default D3jsPractice;
