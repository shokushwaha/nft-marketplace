'use client'
import { Navbar } from '@/components/componentsindex'
import React, { useContext, useEffect } from "react";
import { UploadNFT } from '@/UploadNFT/uploadNFTindex';
import { NFTMarketplaceContext } from '@/context/NFTMarketplaceContext';
const Upload = () => {
    const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext);
    return (

        <>

            <Navbar />
            <div className='items-center justify-center w-11/12 mx-auto mt-10 px-4 ' >
                <h1 className='w-full text-center text-4xl pt-4 font-bold' >Create Your NFT</h1>
                <div >
                    <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT} />
                </div>
            </div>

        </>
    )
}

export default Upload