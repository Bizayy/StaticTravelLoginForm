import React from 'react';
import RightMiniContainer from './rightMiniContainer';
import LeftMiniContainer from './leftMiniContainer';
import { FaPlane } from "react-icons/fa6";
import Image from 'next/image';
import { GiPisaTower } from "react-icons/gi";

const MidContainer = () => {
    return (
        <div className='relative'>
            <div className="w-[90%] xs:max-w-[400px] custom-lg:max-w-[800px] rounded-2xl bg-white h-[480px] mx-[auto] relative z-10 top-10 flex
                 md:top-10 ">
                <LeftMiniContainer />
                <RightMiniContainer />
                <GiPisaTower size={150} className='hidden sm:block sm:absolute sm:-right-[24%] sm:-bottom-[1%] sm:text-white
                    custom-lg:hidden lg:block lg:-right-[12%]' />
            </div>
            {/*<div className='w-14 h-14 rounded-full bg-gray-200 absolute top-14 left-[248px] z-0'></div>
            <div className='w-14 h-14 rounded-full bg-gray-200 absolute bottom-[-100px] right-[248px] z-0'></div>*/}
            <div className='relative hidden sm:block custom-lg:hidden lg:block w-screen sm:-top-[450px] sm:-left-4'>
                <svg
                    className="hidden w-full sm:block custom-lg:hidden lg:block sm:absolute sm:top-[20%] left-[7%]
                    custom-2xl:top-[10%]"
                    xmlns=""
                    viewBox="0 0 400 100"
                >
                    <path
                        d="M30,100 Q100,80 200,100 T350,30"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="1"
                        strokeDasharray="1,2"
                    />
                </svg>
                <FaPlane className='sm:absolute sm:text-white sm:top-5 sm:right-[1.5%] sm:-rotate-45 hidden sm:block
                    lg:top-12 lg:right-[2.8%] custom-2xl:top-16 custom-2xl:right-[3.4%]' size={30} />
            </div>
        </div>
    )
}

export default MidContainer
