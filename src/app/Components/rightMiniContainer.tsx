import React from 'react'
import { GoMail } from "react-icons/go";
import { MdOutlineLock } from "react-icons/md";
import Image from 'next/image';
const RightMiniContainer = () => {
    return (
        <div className='p-10 w-1/2 flex flex-col items-center gap-2'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-primary-100 text-3xl font-extrabold'>Welcome</h1>
                <span className='text-gray-400 text-sm'>Login with email</span>
            </div>
            <div className='flex flex-col gap-6 w-4/5 items-center justify-center'>
                <div className='border rounded-md border-primary-100 p-2 flex items-center gap-2 w-full relative'>
                    <GoMail />
                    <input type="text" className='outline-none' />
                    <span className='absolute left-3 -top-3 text-sm z-10 bg-white px-1 font-sans text-primary-100'>Email id</span>
                </div>
                <div className='border rounded-md border-primary-100 p-2 flex items-center gap-2 w-full relative'>
                    <MdOutlineLock />
                    <input type="password" className='outline-none' />
                    <span className='absolute left-3 -top-3 text-sm font-sans bg-white px-1 text-primary-100'>Password</span>
                </div>
            </div>
            <div className='w-4/5 text-right text-purple-500 text-sm py-2'>
                <span>Forgot password</span>
            </div>
            <button className='bg-purple-500 text-white py-1 px-6 rounded-md'>LOGIN</button>
            <div className='border-t border-t-primary-100 relative w-1/2 my-4'>
                <span className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-1'>OR</span>
            </div>
            <div className='flex items-center w-2/3 justify-between py-2'>
                <div className='cursor-pointer bg-gray-100 rounded-md px-5 py-2'>
                    <Image src={`https://img.icons8.com/color/48/google-logo.png`} width={30} height={30} alt='google-logo' />
                </div>
                <div className='cursor-pointer bg-gray-100 rounded-md px-5 py-2'>
                    <Image src={`https://img.icons8.com/fluency/48/facebook-new.png`} width={30} height={30} alt='facebook-logo' />
                </div>
                <div className='cursor-pointer bg-gray-100 rounded-md px-5 py-2'>
                    <Image src={`https://img.icons8.com/metro/26/mac-os.png`} width={30} height={30} alt='apple-logo' />
                </div>
            </div>
            <p className='text-sm'>Dont't have an account? <span className='text-sm font-semibold cursor-pointer'>Register now</span></p>
        </div >
    )
}

export default RightMiniContainer
