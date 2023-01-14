import BG from "../assets/leaderboardbg.jpeg";
import LeaderBoard from "../components/LeaderBoard";

const Leader = () => {
  //bsdk you have two files named as LeaderBoard toh isiliye maine iss file ko Leader.js kar diya hai. Apne according iska naam chnage kar do
  return (
    <div>
      <img className="w-full h-screen object-cover" src={BG} alt="background" />
      <LeaderBoard /> //This is the chart. Please make sure to align it by
      giving proper css and proper css classname and inside a div.
    </div>
  );
};

export default Leader;
