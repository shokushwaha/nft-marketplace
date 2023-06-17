import React, { useContext } from "react";
import Image from "next/image";
import images from "../../img";

import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const Error = () => {
    const { error, setOpenError } = useContext(NFTMarketplaceContext);
    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center w-screen h-screen fixed top-0 left-0 bg-gray-400 bg-opacity-40">


                <div className="flex flex-col gap-4 bg-white w-2/5 h-2/5 items-center justify-center rounded-md bg-opacity-100">
                    <Image
                        alt="error"
                        src={images.error}
                        width={200}
                        height={200}
                        className="rounded-[50%]"
                    />
                    <p className="text-xl font-bold">{error}</p>
                </div>
            </div>
        </>

    );
};

export default Error;