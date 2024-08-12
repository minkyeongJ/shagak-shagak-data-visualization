import { useParams } from "react-router-dom";

const ChartjsIndexPage = () => {
  let { id } = useParams();
  return <div>Chartjs- {id}번 페이지 입니다.</div>;
};

export default ChartjsIndexPage;
