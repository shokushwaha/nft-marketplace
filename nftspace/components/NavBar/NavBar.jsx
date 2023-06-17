'use client'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Button } from '../componentsindex';
import { Explore, LearnMore } from './index'
import images from '../../img'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { NFTMarketplaceContext } from '@/context/NFTMarketplaceContext';
const Navbar = () => {

    const router = useRouter();

    const [explore, setExplore] = useState(false);
    const [learn, setLearnMore] = useState(false);


    const {
        currentAccount,
        connectWallet,
        openError,
        openSuccess,
        ConnectToWallet,
    } = useContext(NFTMarketplaceContext);

    useEffect(() => {
        ConnectToWallet();

    }, []);

    useEffect(() => {


        setExplore(false);
        setLearnMore(false);



        if (!window.ethereum) return;

        window.ethereum.on("chainChanged", () => {
            window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
            window.location.reload();
        });


    }, []);

    return (
        <>
            <div className='flex gap-4 items-center justify-evenly bg-slate-800 text-white h-20 mt-4 w-11/12 mx-auto rounded-md shadow'>

                <div className=''>
                    <Image src={images.earn} alt='logo' width={100} height={100} />
                </div>

                <div className='' >

                    <input type='text' placeholder='search' className='rounded-md px-4 py-1 shadow bg-gray-200' />

                </div>

                <div className='flex gap-20 justify-center' >
                    <div >
                        <p onClick={() => { setExplore(true) }} className='hover:cursor-pointer'>Explore</p>
                        <div>{explore && <Explore />}</div>
                    </div>

                    <div>
                        <p onClick={() => { setLearnMore(true) }} className='hover:cursor-pointer' >Learn</p>
                        <div> {learn && <LearnMore />}</div>
                    </div>
                </div>

                <div className=''>

                    {currentAccount == "" ? (
                        <button onClick={() => connectWallet()}  >
                            Connect
                        </button>
                    ) : (
                        <button
                            onClick={() => router.push("/uploadNFT")
                            }
                            className='bg-gray-200 px-4 py-1 rounded-md text-slate-800 shadow-md hover:scale-105'
                        >
                            Create
                        </button>
                    )}
                </div>

            </div>

        </>
    )
}

export default Navbar