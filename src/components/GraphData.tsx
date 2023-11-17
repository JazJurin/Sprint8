import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { setGraphData } from "../store/Slices/GraphDataSlice";
import { useEffect } from "react";

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
  const chartData = useSelector((state) => state.GraphData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/expenses/1"); // Reemplaza la URL con la correcta
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
    animation: false,
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
    <h3>Expenses - Last Week</h3>
      <Bar data={chartData} options={options} />
      </>
  )
}
