'use client'
import React, { useContext } from 'react'
import Image from "next/image";
import Link from "next/link";
import { NFTMarketplaceContext } from '@/context/NFTMarketplaceContext';


const NFTCard = ({ NFTData }) => {
    const { truncateString } = useContext(NFTMarketplaceContext);


    return (
        <>
            <div className=' w-11/12 mx-auto text-6xl mt-8 mb-4 border-b-4 border-gray-400 pb-2 flex items-center'>
                <span className='font-extrabold mx-4 flex gap-4 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-ping">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    NFTs
                </span>
                for Sale
            </div>
            <div className='grid grid-cols-4 gap-4 w-11/12 mx-auto mt-4 mb-8'>
                {NFTData.map((el, i) => (
                    <div className='flex items-center justify-center w-2/3 mx-auto hover:rotate-1 pt-0'>
                        <Link href={{ pathname: "/NFTdetails", query: el }} key={i + 1}
                            className='flex flex-col items-start justify-center'>

                            <div className='h-[240px] bg-gray-200'>

                                <Image
                                    src={el.image}
                                    alt="NFT image"
                                    width={240}
                                    height={100}
                                    className='rounded-t-md'
                                />
                            </div>


                            <div className='flex flex-col items-start justify-center bg-gray-200  w-[240px] px-2'>
                                <span className='text-gray-800 font-bold flex items-center justify-between w-full pt-2' >
                                    <span>
                                        {truncateString(el.name, 10)}
                                    </span>
                                    <span>
                                        #{el.tokenId}
                                    </span>
                                </span>
                                <span className='text-gray-500'>
                                    {truncateString(el.description, 10)}
                                </span>
                                <span className='font-semibold'>
                                    <span className='font-normal text-gray-500'>
                                        Owner :
                                    </span>
                                    {truncateString(el.owner, 10)}
                                </span>
                                <span className='font-semibold'>
                                    <span className='font-normal text-gray-500'>

                                        Seller :
                                    </span>
                                    {truncateString(el.owner, 10)}
                                </span>
                                <span className='mt-2 w-full flex flex-col items-center justify-center pt-2 border-t-2 border-gray-500'>

                                    <small>Price</small>
                                    <p className='font-extrabold font-xl pb-2' >{el.price}ETH</p>
                                </span>
                            </div>

                        </Link>
                    </div>
                ))}
            </div>

        </>
    )
}

export default NFTCard