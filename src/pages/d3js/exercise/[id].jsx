import { useParams } from "react-router-dom";

const D3jsExercise = () => {
  let { id } = useParams();
  return <div>{id}번 문제풀이 페이지 입니다.</div>;
};

export default D3jsExercise;
