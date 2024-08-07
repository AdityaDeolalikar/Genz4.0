// DayPointsBarChart.js
import React, { useContext, useState, useEffect } from "react";
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
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/contants";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const DayPointsChart = () => {
  const [todayPoints, setTodayPoints] = useState(0);
  const { rewardPoints } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("auth"));

    // fetch points
    axios
      .post(`${USER_API_END_POINT}/getPoints`, {
        email: user.email,
      })
      .then((res) => {
        setTodayPoints(res.data.todayPoints);
      });
  }, [rewardPoints]);
  const data = {
    labels: ["Mon", "Tues", "Wed", "Thur"],
    datasets: [
      {
        label: "Points",
        data: [20, 50, 70, Number.parseInt(todayPoints)], // Example data points
        backgroundColor: "rgba(19, 40, 145, 0.8)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Points Over Days of the Week",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days",
        },
      },
      y: {
        title: {
          display: true,
          text: "Points",
        },
        beginAtZero: true,
        ticks: {
          stepSize: 10, // Step size for y-axis ticks
          max: 100, // Set the maximum limit for y-axis
        },
      },
    },
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-1/2">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default DayPointsChart;
