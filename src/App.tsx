import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "売上情報",
    },
    tooltip: {
      titleFont: { size: 17 },
      bodyFont: { size: 17 },
      titleMarginBottom: 15,
      backgroundColor: "rgba(255,255,255,0.4)",
      titleColor: "rgba(0,0,0,1)",
      bodyColor: "rgba(0,0,0,1)",
      displayColors: true,
      xAlign: "left" as const,
    },
  },
};

// ラベルは可変にする
// 以下のようなデータをサーバーサイドから受け取って
// それを整形する
// const rawData = [
//   { date: "2023/01", preview: 100, sales: 5 },
//   { date: "2023/01", preview: 100, sales: 5 },
//   { date: "2023/01", preview: 100, sales: 5 },
// ];
const labels = [
  "2023/01",
  "2023/02",
  "2023/03",
  "2023/04",
  "2023/05",
  "2023/06",
  "2023/07",
  "2023/08",
  "2023/09",
  "2023/10",
  "2023/11",
  "2023/12",
  "2024/01",
  "2024/02",
  "2024/03",
  "2024/04",
  "2024/05",
  "2024/06",
  "2024/07",
  "2024/08",
  "2024/09",
  "2024/10",
  "2024/11",
  "2024/12",
];

export const data = {
  labels,
  datasets: [
    {
      label: "閲覧数",
      data: [
        -1, 30, -2, 55, 4, 45, -1, -1, 30, -2, 55, 4, 45, -1, -1, 30, -2, 55, 4,
        45, -1,
      ],
      lineTension: 0.5,
      borderWidth: 3,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "購入数",
      data: [
        -1, 2, 3, 4, 4, 4, -4, -1, 2, 3, 4, 4, 4, -4, -1, 2, 3, 4, 4, 4, -4, -1,
        2, 3, 4, 4, 4, -4,
      ],
      lineTension: 0.5,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const App = () => <Line options={options} data={data} />;
