import { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BG from "../assets/bountiesbg.jpeg";

const Bounties = () => {
  const [bounties, setBounties] = useState([]);
  const fetchItems = async () => {
    const data = await sanityClient.fetch(`*[_type == "bounties"]{
        bountyName,
        pricePool,
        submission
    }`);
    setBounties(data);
    //done
    console.log(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // in your return simply map the data like you normaly do
  // bounties.map((bounty) => "html code here")
  // use the attributes like bounty.bountyName, bounty.pricePool, bounty.submission

  return (
    <div>
      <img className="w-full h-screen object-cover" src={BG} alt="background" />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen text-white flex flex-col justify-center items-center">
        <div className="flex flex-col items-center rounded-[15px] text-center bg-neutral-800/70 backdrop-blur-sm py-[20px] mx-[10px] sm:mx-[0px]">
          <h1 className="text-[20px] font-medium bg-neutral-300/10 rounded-full px-[15px] my-[10px]">
            bounties
          </h1>
          <ul className="px-[20px] sm:px-[40px]">
            {bounties.map((bounty) => {
              return (
                <li className="flex flex-col sm:flex-row items-center justify-between border-b border-neutral-600 py-[10px]">
                  <p>{bounty.bountyName}</p>
                  <div className="flex items-center sm:ml-[50px] my-[10px] sm:my-[0px]">
                    <p className="bg-green-600 rounded-full py-[2px] px-[12px] mr-[10px] hover:opacity-70 ease-in duration-300">
                      {bounty.pricePool}
                    </p>
                    <a
                      className="bg-white text-black rounded-full py-[2px] px-[12px] hover:opacity-70 ease-in duration-300"
                      href={bounty.submission}
                    >
                      Submit
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bounties;
