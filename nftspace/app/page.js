'use client';
import Banner from '@/components/Banner/Banner';
import { Error, Navbar } from '@/components/componentsindex'
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

    });
  }, []);
  return (
    <>

      <div className='bg-slate-800'>

        <Navbar />
        {/* <Error /> */}
        <Banner />
      </div>

    </>
  )
}
