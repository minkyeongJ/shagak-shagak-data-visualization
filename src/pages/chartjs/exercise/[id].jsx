import { useParams } from "react-router-dom";

const ChartjsExercise = () => {
  let { id } = useParams();
  return <div>Chart.js - {id}번 페이지</div>;
};

export default ChartjsExercise;
