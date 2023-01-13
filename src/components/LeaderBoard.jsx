import { useState, useEffect } from "react";
import sanityClient from "../client.js";

import { Bar } from "react-chartjs-2";

const LeaderBoard = () => {
  const [leaders, setleaders] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await sanityClient.fetch(`*[_type == "leaderBoard"]{
            personName,
            totalWinnings
        }`);
      setleaders(data);
      console.log("useEffect data");
      console.log(data);
    };
    fetchItems();
  }, []);

  let labels = leaders.map((leader) => leader.personName);
  let winings = leaders.map((winning) => winning.totalWinnings);
  console.log("label data");
  console.log(labels);
  console.log("winings data");
  console.log(winings);

  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "Sales Data Set",
  //         backgroundColor: "rgba(255,99,132,0.2)",
  //         borderColor: "rgba(255,99,132,1)",
  //         borderWidth: 1,
  //         hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //         hoverBorderColor: "rgba(255,99,132,1)",
  //         data: winings,
  //       },
  //     ],
  //   };

  return (
    <>
      <div className="App">
        <h1>Sales Realtime chart</h1>
        {/* <Bar
          data={{
            labels: leaders.map((leader) => leader.personName),
            datasets: [
              {
                label: "number of winnings",
                data: leaders.map((winning) => winning.totalWinnings),
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
          }}
        /> */}
      </div>
    </>
  );
};

export default LeaderBoard;
