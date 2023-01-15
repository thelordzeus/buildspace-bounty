import { useState, useEffect } from "react";
import sanityClient from "../client.js";

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

const LeaderBoard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const [leaders, setleaders] = useState([]);
  const fetchItems = async () => {
    const data = await sanityClient.fetch(`*[_type == "leaderBoard"]{
          personName,
          totalWinnings
      }`);
    setleaders(data);
    // console.log("useEffect data");
    console.log("This data is now working");
    console.log(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          color: "rgba(255, 255, 255)",
          font: {
            size: 15,
            style: "normal",
            lineHeight: 1.5,
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          color: "rgba(255, 255, 255)",
          font: {
            size: 15,
            style: "normal",
            lineHeight: 1.5,
          },
        },
      },
    },
    barThickness: 50,
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "rgba(255, 255, 255)",
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "",
        color: "rgba(255, 255, 255)",
        font: {
          size: 20,
        },
      },
    },
  };

  const data = {
    labels: leaders.map((leader) => leader.personName),
    datasets: [
      {
        label: "Total bounties won",
        data: leaders.map((winning) => winning.totalWinnings),
        backgroundColor: [
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
          "rgba(255, 255, 255)",
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  //everything working .

  return (
    <>
      <div className="App">
        <div className="Bar">
          <Bar data={data} options={options} height={400} width={600} />
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
