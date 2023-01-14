import { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BG from "../assets/bountiesbg.jpeg"

const Bounties = () => {
    const [bounties, setBounties] = useState([]);

    useEffect(()=>{
        const fetchItems = async () => {
            const data = await sanityClient.fetch(`*[_type == bounties]{
                bountyName,
                pricePool,
                submission
            }`);
            setBounties(data);
            console.log("useEffect data");
            console.log(data);


        };
        fetchItems();
    }, [bounties]);
    
    // in your return simply map the data like you normaly do 
    // bounties.map((bounty) => "html code here")
    // use the attributes like bounty.bountyName, bounty.pricePool, bounty.submission

    return ( 
        <div>
            <img className="w-full h-screen object-cover" src={BG} alt="background"/>
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen text-white flex flex-col justify-center items-center">
                <div className="flex flex-col items-center rounded-[15px] bg-neutral-800/70 backdrop-blur-sm py-[20px]">
                    <h1 className="text-[20px] font-medium bg-neutral-300/10 rounded-full px-[15px] my-[10px]">
                        bounties
                    </h1>
                    <ul className="px-[40px]">
                        <li className="flex items-center justify-between border-b border-neutral-600 py-[10px]">
                            <p>
                                Github co-pilot for emails
                            </p>
                            <div className="flex items-center ml-[50px]">
                                <p className="bg-green-600 rounded-full py-[2px] px-[12px] mr-[10px] hover:opacity-70 ease-in duration-300">&#36;250</p>
                                <a className="bg-white text-black rounded-full py-[2px] px-[12px] hover:opacity-70 ease-in duration-300" href=" ">Submit</a>
                            </div>
                        </li>
                        <li className="flex items-center justify-between border-b border-neutral-600 py-[10px]">
                            <p>
                                Design a bounties landing page
                            </p>
                            <div className="flex items-center ml-[50px]">
                                <p className="bg-green-600 rounded-full py-[2px] px-[12px] mr-[10px] hover:opacity-70 ease-in duration-300">&#36;200</p>
                                <a className="bg-white text-black rounded-full py-[2px] px-[12px] hover:opacity-70 ease-in duration-300" href=" ">Submit</a>
                            </div>
                        </li>
                        <li className="flex items-center justify-between border-b border-neutral-600 py-[10px]">
                            <p>
                                Chrome extension to TLDR every page
                            </p>
                            <div className="flex items-center ml-[50px]">
                                <p className="bg-green-600 rounded-full py-[2px] px-[12px] mr-[10px] hover:opacity-70 ease-in duration-300">&#36;150</p>
                                <a className="bg-white text-black rounded-full py-[2px] px-[12px] hover:opacity-70 ease-in duration-300" href=" ">Submit</a>
                            </div>
                        </li>
                        <li className="flex items-center justify-between border-b border-neutral-600 py-[10px]">
                            <p>
                                Historic NFT Floor price API route
                            </p>
                            <div className="flex items-center ml-[50px]">
                                <p className="bg-green-600 rounded-full py-[2px] px-[12px] mr-[10px] hover:opacity-70 ease-in duration-300">&#36;100</p>
                                <a className="bg-white text-black rounded-full py-[2px] px-[12px] hover:opacity-70 ease-in duration-300" href=" ">Submit</a>
                            </div>
                        </li>
                        <li className="flex items-center justify-between border-b border-neutral-600 py-[10px]">
                            <p>
                                Create a comic about buildspace university
                            </p>
                            <div className="flex items-center ml-[50px]">
                                <p className="bg-green-600 rounded-full py-[2px] px-[12px] mr-[10px] hover:opacity-70 ease-in duration-300">&#36;100</p>
                                <a className="bg-white text-black rounded-full py-[2px] px-[12px] hover:opacity-70 ease-in duration-300" href=" ">Submit</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    )}
 
export default Bounties;