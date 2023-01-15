import BG from "../assets/leaderboardbg.jpeg";
import LeaderBoard from "../components/LeaderBoard";

const Leader = () => {
  //bsdk you have two files named as LeaderBoard toh isiliye maine iss file ko Leader.js kar diya hai. Apne according iska naam chnage kar do
  return (
    <div>
      <img className="w-full h-screen object-cover" src={BG} alt="background" />
      <div className="">
        <LeaderBoard />
      </div>
    </div>
  );
};

export default Leader;
