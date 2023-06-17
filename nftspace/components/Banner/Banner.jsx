'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import images from '../../img'
const Banner = () => {
    const [bannerHeading, setBannerHeading] = useState('');
    const [sentence, setSentence] = useState(`Create & Explore`);
    const [cnt, setCnt] = useState(0);

    useEffect(() => {
        if (cnt < sentence.length) {
            setTimeout(() => {
                setBannerHeading(bannerHeading + sentence[cnt]);
                setCnt(cnt + 1);
            }, 200)
        }

        else if (cnt == sentence.length) {
            setBannerHeading('');
            setCnt(0);
        }

    }, [cnt]);
    return (
        <>
            <div className='bg-slate-800 mt-4 grid grid-cols-2 w-11/12 mx-auto'>
                <div className='text-gray-200 flex flex-col gap-2 items-center justify-center text-2xl' >{bannerHeading}|
                    <span className='block text-6xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
                        NFTs
                    </span>
                </div>
                {/* <div className='motion-safe:animate-bounce-slow'> */}
                <div>
                    <Image src={images.banner} alt='banner' width={400} height={100} className='ml-auto' />
                </div>
            </div>
        </>
    )
}

export default Banner