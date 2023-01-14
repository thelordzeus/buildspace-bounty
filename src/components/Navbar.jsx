import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'
import logo from "../assets/buildspacelogo.png"

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)

  const handleMobileNav = () => {
    mobileNav
      ? setMobileNav(false)
      : setMobileNav(true)
  }

  return (
    <div className='z-10 fixed top-0 left-0 flex items-center bg-neutral-600/40 backdrop-blur-lg h-[60px] w-full'>
        <div className='flex justify-between items-center text-white w-full sm:w-[70%] px-[25px] sm:px-[0px] mx-auto'>
            <div className='flex items-center text-[20px] font-medium'>
                <img className="h-12 w-12" src={logo} alt="buildspace logo"/>
                <p>buildspace</p>
            </div>
            <ul className='hidden sm:flex text-neutral-300'>
                <li className='px-[20px]'>bounties</li>
                <li className='px-[20px]'>leaderboard</li>
            </ul>
            <button className='hidden sm:block bg-white text-black font-medium text-[18px] rounded-full py-[5px] px-[16px]'>Start</button>
            <div onClick={handleMobileNav} className='sm:hidden'><RxHamburgerMenu size={30}/></div>
        </div>
        {mobileNav && 
          <div className='z-20 absolute top-0 left-0 bg-black text-white w-full'>
            <div className='flex justify-between items-center px-[25px] py-[6px]'>
              <div className='flex items-center text-[20px] font-medium'>
                  <img className="h-12 w-12" src={logo} alt="buildspace logo"/>
                  <p>buildspace</p>
              </div>
              <div className='text-neutral-500'>
                <VscClose onClick={handleMobileNav} size={35}/>
              </div>
            </div>
            <ul className='text-neutral-300 py-[25px]'>
                <li className='mx-[25px] py-[5px]'>bounties</li>
                <li className='mx-[25px] py-[5px]'>leaderboard</li>
            </ul>
            <button className='bg-white text-black font-medium text-[18px] rounded-full py-[5px] px-[16px] mx-[25px] mt-[15px] mb-[60px]'>Start</button>
          </div>
        }
    </div>
)}
