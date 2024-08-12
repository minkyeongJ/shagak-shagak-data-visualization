import { useParams } from "react-router-dom";

const CanvasIndexPage = () => {
  let { id } = useParams();
  return <div>Canvas- {id}번 페이지 입니다.</div>;
};

export default CanvasIndexPage;
