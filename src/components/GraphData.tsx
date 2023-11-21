import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { setGraphData } from "../store/Slices/GraphDataSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RootState } from "../store/store";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function GraphData() {
  const dispatch = useDispatch();
  const chartData = useSelector((state: RootState) => state.GraphData);
  const { t } = useTranslation(["welcome"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/expenses/1");
        const data = await response.json();
        dispatch(
          setGraphData({
            labels: Object.keys(data.week),
            datasets: [
              {
                label: "expenses",
                data: Object.values(data.week),
                backgroundColor: "rgba(0, 220, 195, 0.5)",
              },
            ],
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 400,
      },
      x: {
        ticks: { color: "rgba(0, 220, 195)" },
      },
    },
  };

  return (
    <>
      <h3>{t("title2")}</h3>
      <Bar data={chartData} options={options} />
    </>
  );
}

