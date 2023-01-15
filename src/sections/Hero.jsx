import { BsArrowRight } from "react-icons/bs"
import BG from "../assets/buildspacebg.jpeg"

export default function Hero() {
  return (
    <div> 
        <img className="top-0 left-0 w-full h-screen object-cover" src={BG} alt="background"/>
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen text-white flex flex-col justify-center items-center">
            <div className="flex items-center max-[500px]:text-[16px] text-[20px] rounded-full bg-neutral-600/40 backdrop-blur-lg hover:backdrop-blur-none ease-in duration-300 py-[7px] px-[18px] sm:px-[24px] mb-[36px] ">
                <p className="pr-[5px] hover:pr-[18px] ease-in duration-300">
                    Buildspace Universities are live
                </p>
                <div className="pl-[5px] hover:pl-[18px] ease-in duration-300">
                    <BsArrowRight/>
                </div>
            </div>
            <h1 className="text-[30px] min-[500px]:text-[50px] sm:text-[65px] md:text-[75px] lg:text-[85px] font-semibold text-center leading-none max-w-[565px] px-[50px] sm:px-[0px]  mb-[36px]">
                Dare to dream.
                Dare to build.
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] max-w-[700px] text-center mb-[40px] sm:mb-[80px] px-[30px] sm:px-[30px] lg:px-[0px]">
                Buildspace University introduces bounties, these can be solved by you or your communities. 
                Earn, learn and gain work experience by building cool stuff. 
            </p> 
            <button className="text-[20px] font-medium text-black bg-white rounded-full py-[10px] px-[24px] hover:opacity-70 ease-in duration-300">Explore</button>
        </div>
    </div>
  )
}
