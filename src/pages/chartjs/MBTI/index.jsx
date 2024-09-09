import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MBTIHorizontalStackedBarChart = () => {
  const mbtiData = [
    { left: "E", right: "I", leftScore: 65, rightScore: 35 },
    { left: "S", right: "N", leftScore: 55, rightScore: 45 },
    { left: "T", right: "F", leftScore: 70, rightScore: 30 },
    { left: "J", right: "P", leftScore: 40, rightScore: 60 },
  ];

  const data = {
    labels: mbtiData.map(() => ""), // 빈 레이블 사용
    datasets: [
      {
        label: "첫 번째 요소",
        data: mbtiData.map((item) => item.leftScore),
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "두 번째 요소",
        data: mbtiData.map((item) => item.rightScore),
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // 가로 방향 차트
    responsive: true,
    scales: {
      x: {
        stacked: true,
        max: 100,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "MBTI 유형 분석",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const dataIndex = context.dataIndex;
            const datasetIndex = context.datasetIndex;
            const score = context.parsed.x;
            const item = mbtiData[dataIndex];
            const label = datasetIndex === 0 ? item.left : item.right;
            return `${label}: ${score}%`;
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        height: "500px",
        width: "fit-content",
        marginBottom: "20px",
        padding: "20px",
      }}
    >
      <Bar data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
        }}
      >
        {mbtiData.map((item, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${index * 20 + 8}%`,
              height: "25%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 10px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <span>{item.left}</span>
            <span>{item.right}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MBTIHorizontalStackedBarChart;
