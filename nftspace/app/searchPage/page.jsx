'use client'
import React, { useEffect, useState, useContext } from "react";
import { Loader, NFTCardCollection, Navbar } from "@/components/componentsindex";

import SearchBar from "@/SearchPage/SearchBar";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const page = () => {
    const { fetchNFTs, setError } = useContext(NFTMarketplaceContext);
    const [nfts, setNfts] = useState([]);
    const [nftsCopy, setNftsCopy] = useState([]);



    useEffect(() => {
        try {
            fetchNFTs().then((items) => {
                if (items === undefined) {
                    return;
                }
                setNfts(items.reverse());
                setNftsCopy(items);
            });
        } catch (error) {
            setError("Please reload the browser", error);
        }
    }, []);

    const onHandleSearch = (value) => {
        const filteredNFTS = nfts.filter(({ name }) =>
            name.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredNFTS.length === 0) {
            setNfts(nftsCopy);
        } else {
            setNfts(filteredNFTS);
        }
    };

    const onClearSearch = () => {
        if (nfts.length && nftsCopy.length) {
            setNfts(nftsCopy);
        }
    };

    return (
        <>
            <Navbar />
            <SearchBar
                onHandleSearch={onHandleSearch}
                onClearSearch={onClearSearch}
            />
            {nfts.length == 0 ? <Loader /> : <NFTCardCollection NFTData={nfts} />}
        </>
    )
}

export default page