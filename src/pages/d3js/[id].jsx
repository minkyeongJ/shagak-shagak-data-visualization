import { useParams } from "react-router-dom";

const D3jsIndexPage = () => {
  let { id } = useParams();
  return <div>D3js- {id}번 페이지 입니다.</div>;
};

export default D3jsIndexPage;
