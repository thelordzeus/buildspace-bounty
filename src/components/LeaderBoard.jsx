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
    maintainAspectRatio: true,
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
      },
      title: {
        display: true,
        text: "LeaderBoard",
      },
    },
  };

  const data = {
    labels: leaders.map((leader) => leader.personName),
    datasets: [
      {
        label: "LeaderBoard",
        data: leaders.map((winning) => winning.totalWinnings),
        backgroundColor: [
          "#2E0249",
          "#FF0000",
          "#570A57",
          "#00FFDD",
          "#FF0075",
        ],
        hoverOffset: 4,
      },
    ],
  };

  //everything working .

  return (
    <>
      <div className="App">
        <h1>Sales Realtime chart</h1>
        <div className="Bar">
          <Bar data={data} options={options} height={100} width={100} />
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
