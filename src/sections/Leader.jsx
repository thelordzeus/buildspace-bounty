import BG from "../assets/leaderboardbg.jpeg";
import LeaderBoard from "../components/LeaderBoard";

const Leader = () => {
  return (
    <div>
      <img
        className="w-full h-screen object-cover relative"
        src={BG}
        alt="background"
      />

      <div className="absolute top-0 left-0 w-full flex items-center justify-center bg-black/30 h-screen">
        <div className=" flex flex-col items-center rounded-lg bg-neutral-800/70 backdrop-blur-sm py-[7px] px-[18px] sm:px-[24px] mb-[36px] max-[500px]:text-[16px] text-[20px]">
          <h1 className="text-[20px] font-medium bg-neutral-300/10 rounded-full px-[15px] my-[10px] text-white">
            LeaderBoards
          </h1>
          <LeaderBoard />
        </div>
      </div>
    </div>
  );
};

export default Leader;
