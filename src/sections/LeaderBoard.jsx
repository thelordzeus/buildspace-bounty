import BG from "../assets/leaderboardbg.jpeg";
import Chart from "../components/Chart";

const LeaderBoard = () => {
  return (
    <div>
      <img
        className="w-full h-screen object-cover relative"
        src={BG}
        alt="background"
      />
      <div className="absolute top-0 left-0 w-full flex items-center justify-center bg-black/30 h-screen">
        <div className=" flex flex-col items-center rounded-[15px] bg-neutral-800/70 backdrop-blur-sm pt-[7px] pb-[25px] px-[20px] sm:px-[24px] max-[500px]:text-[16px] text-[20px] mx-[15px]">
          <h1 className="text-[20px] font-medium bg-neutral-300/10 rounded-full px-[15px] my-[10px] text-white">
            LeaderBoards
          </h1>
          <Chart/>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
