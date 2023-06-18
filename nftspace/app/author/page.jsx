'use client'
import React, { useState, useEffect, useContext } from "react";
import ProfileCard from '@/AuthorPage/ProfileCard'
import { Navbar } from '@/components/componentsindex'
import images from "../../img";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const page = () => {
    const [collectables, setcollectables] = useState(true);
    const [created, setCreated] = useState(false);
    const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
        NFTMarketplaceContext
    );

    const [nfts, setNfts] = useState([]);
    const [myNFTs, setMyNFTs] = useState([]);

    useEffect(() => {
        fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
            setNfts(items);
        });
    }, []);

    useEffect(() => {
        fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
            setMyNFTs(items);
        });
    }, []);

    return (
        <>

            <Navbar />
            <ProfileCard currentAccount={currentAccount} />
        </>
    )
}

export default page