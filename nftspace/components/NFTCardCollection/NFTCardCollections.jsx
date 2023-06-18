import React from "react";
import Image from "next/image";

import Link from "next/link";


const NFTCardCollection = ({ NFTData }) => {
    return (
        <>

            <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto mt-4">
                {NFTData?.map((el, i) => (
                    <Link href={{ pathname: "/NFTdetails", query: el }} key={i + 1}
                        className=" flex flex-col items-center justify-center ">
                        <div key={i + 1}>
                            <div >
                                <Image
                                    src={el.image}
                                    alt="NFT"
                                    width={300}
                                    height={300}
                                    className="rounded-t-md border-t-2 border-l-2 border-r-2 border-gray-400 "
                                />
                            </div>

                            <div className="flex flex-col items-start justify-center bg-gray-200 px-4 py-2 mb-2">
                                <span className="text-2xl font-bold"> {el.name}</span>
                                <small className="text-xl" >Price</small>
                                <p className="text-2xl font-extrabold" >{el.price} ETH</p>
                            </div>
                        </div>

                    </Link>
                ))}
            </div>
        </>
    );
};

export default NFTCardCollection;