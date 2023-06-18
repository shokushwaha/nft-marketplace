'use client';

import { Error, Navbar, Banner, Loader, NFTCard } from '@/components/componentsindex'
import { NFTMarketplaceContext, NFTMarketplaceProvider } from '@/context/NFTMarketplaceContext'
import Image from 'next/image'
import { useState, useEffect, useContext } from 'react';

export default function Home() {
  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    fetchNFTs().then((items) => {
      if (items == undefined) {
        return;
      }
      setNfts(items.reverse());
      console.log(items)
    });
  }, []);
  return (
    <>

      <div className='bg-slate-800 h-screen'>

        <Navbar />
        {/* <Error /> */}
        <Banner />

      </div>
      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}

    </>
  )
}
