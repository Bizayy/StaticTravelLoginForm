import React from 'react'
import Image from 'next/image'
import image from '../../../public/pexels-ahmerqureshi-9375817.jpg'
import { Courgette } from 'next/font/google'

const courgette = Courgette({
    subsets: ['latin'],
    weight: ['400'],
})
const LeftMiniContainer = () => {
    return (
        <div className='hidden custom-lg:block w-1/2 rounded-l-2xl overflow-hidden relative'>
            <Image src={image} alt="beautiful scenery" className='h-full w-full object-cover' />
            <h1 className={courgette.className}>
                <span className='absolute top-2 left-[120px] text-white text-2xl'>Ulululu Tours</span>
            </h1>
            <p className='absolute top-10 mx-auto text-white text-sm text-center'>Travel is the only purchase that enriches you in ways beyond material wealth</p>
        </div>
    )
}

export default LeftMiniContainer
