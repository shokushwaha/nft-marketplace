'use client'
import NFTDetials from '@/NFTDetailsPage/NFTDetials';
import { Navbar } from '@/components/componentsindex';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [seller, setSeller] = useState('');
    const [owner, setOwner] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [tokenId, setTokenId] = useState('');
    const [description, setDescription] = useState('');
    const [tokenURI, setTokenURI] = useState('');
    const searchParam = useSearchParams();


    useEffect(() => {
        const price = searchParam.get('price');
        const seller = searchParam.get('seller');
        const owner = searchParam.get('owner');
        const image = searchParam.get('image');
        const name = searchParam.get('name');
        const tokenId = searchParam.get('tokenId');
        const tokenURI = searchParam.get('tokenURI');
        const description = searchParam.get('description');
        setPrice(price);
        setSeller(seller);
        setOwner(owner);
        setImage(image);
        setName(name);
        setTokenId(tokenId);
        setTokenURI(tokenURI);
        setDescription(description);
    }, []);


    return (
        <>

            <Navbar />
            <NFTDetials
                price={price}
                seller={seller}
                owner={owner}
                image={image}
                name={name}
                tokenId={tokenId}
                description={description}
                tokenURI={tokenURI}
            />

        </>
    )
}

export default page