import React from 'react';
import RightMiniContainer from './rightMiniContainer';
import LeftMiniContainer from './leftMiniContainer';
import { FaPlane } from "react-icons/fa6";
import Image from 'next/image';
import { GiPisaTower } from "react-icons/gi";

const MidContainer = () => {
    return (
        <div className='relative'>
            <div className="w-3/5 rounded-2xl bg-white h-[480px] mx-[auto] relative z-10 top-20 flex overflow-hidden">
                <LeftMiniContainer />
                <RightMiniContainer />
            </div>
            {/*<div className='w-14 h-14 rounded-full bg-gray-200 absolute top-14 left-[248px] z-0'></div>
            <div className='w-14 h-14 rounded-full bg-gray-200 absolute bottom-[-100px] right-[248px] z-0'></div>*/}
            <svg
                className="absolute top-0 -left-4"
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
            <FaPlane className='absolute text-white top-20 right-[149px] -rotate-45' size={30} />
            <GiPisaTower size={150} className='absolute right-[180px] -bottom-[85px] text-white' />
        </div>
    )
}

export default MidContainer
