import { NFTMarketplaceContext } from '@/context/NFTMarketplaceContext';
import Image from 'next/image'
import React, { useContext } from 'react'
import { Button } from '@/components/componentsindex';
const NFTDetials = ({ price,
    seller,
    owner,
    image,
    name,
    tokenId,
    description,
    tokenURI
}) => {


    const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);
    const nft = { image, tokenId, tokenURI, description, seller, owner, price };
    return (
        <>

            <div className='flex flex-col gap-4 items-center justify-center w-11/12 mx-auto my-4'>
                <div className='flex items-center text-4xl  border-b-2 border-gray-500 pb-2 px-4' >
                    <span className='text-5xl font-extrabold mx-2'>
                        NFT
                    </span>
                    Details

                </div>




                <div className='grid grid-cols-2 pb-4 '>
                    <div className='rounded-md overflow-hidden overflow-x-hidden'>
                        <Image src={image} alt='nft image' width={500} height={100}

                            className='hover:scale-110 transition duration-500  object-cover'
                        />
                    </div>
                    <div className='flex flex-col items-start  px-4 py-2 gap-4 justify-center'>
                        <span className='border-b-2 border-gray-400  w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20   animate-pulse">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>

                        </span>
                        <span className='flex items-center'>
                            <span className='text-gray-500 text-md mr-4'>
                                Name:
                            </span>
                            <span className='text-gray-800 text-2xl font-bold'>
                                {name}
                            </span>
                        </span>

                        <span className='flex items-center'>
                            <span className='text-gray-500 text-md mr-4'>
                                TokenID:
                            </span>
                            <span className='text-gray-800 text-2xl font-bold'>
                                {tokenId}
                            </span>
                        </span>

                        <span className='flex items-center'>
                            <span className='text-gray-500 text-md mr-4'>
                                Description:
                            </span>
                            <span className='text-gray-800 text-2xl font-bold'>
                                {description}
                            </span>
                        </span>

                        <span className='flex items-center'>
                            <span className='text-gray-500 text-md mr-4'>
                                Seller:
                            </span>
                            <span className='text-gray-800 text-xl font-bold'>
                                {seller}
                            </span>
                        </span>

                        <span className='flex items-center'>
                            <span className='text-gray-500 text-md mr-4'>
                                Owner:
                            </span>
                            <span className='text-gray-800 text-xl font-bold'>
                                {owner}
                            </span>
                        </span>

                        <span className='flex items-center'>
                            <span className='text-gray-500 text-md mr-4'>
                                Price:
                            </span>
                            <span className='text-gray-800 text-2xl font-bold'>
                                {price} ETH
                            </span>
                        </span>
                        <div>

                            {currentAccount == seller?.toLowerCase() ? (
                                <p>You can't buy your own NFT</p>
                            ) : currentAccount == owner?.toLowerCase() ? (
                                <Button

                                    btnName="List on Marketplace"
                                    handleClick={() =>
                                        router.push(
                                            `/reSellToken?id=${tokenId}&tokenURI=${tokenURI}&price=${price}`
                                        )
                                    }

                                />
                            ) : (
                                <Button

                                    btnName="Buy NFT"
                                    handleClick={() => buyNFT(nft)}

                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NFTDetials