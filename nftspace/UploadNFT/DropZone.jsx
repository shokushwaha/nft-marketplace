import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import images from "../img";

const DropZone = ({
    title,
    heading,
    subHeading,
    name,
    description,
    uploadToIPFS,
    setImage,
    price,
}) => {
    const [fileUrl, setFileUrl] = useState(null);

    const onDrop = useCallback(async (acceptedFile) => {
        const url = await uploadToIPFS(acceptedFile[0]);
        setFileUrl(url);
        setImage(url);
    });

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { "image/*": [".jpeg", ".png"] },
        maxSize: 5000000,
    });
    return (
        <>

            <div className="pt-4 mt-4 bg-gray-200 h-auto px-4 py-2 flex flex-col items-center justify-center gap-4 rounded-md shadow hover:scale-105 duration-300 hover:border-2 border-black hover:animate-pulse">
                <div  {...getRootProps()} >
                    <input {...getInputProps()} />
                    <div className="">
                        <p>{title}</p>
                        <div className="hover:cursor-pointer  flex items-center justify-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mt-4 mb-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>

                        </div>
                        <p className="text-center text-gray-500" >Drag & Drop File</p>
                        <p className="text-center text-gray-500">Browse Media on your Deivce</p>
                    </div>
                </div>

                {fileUrl && (
                    <aside>
                        <div >
                            <Image src={fileUrl} alt="nft image" width={200} height={200} className="mt-4" />

                            <div className="mt-2">
                                <div>
                                    <p className="text-gray-800 font-bold">
                                        <span className="text-gray-500 font-semibold" >NFT Name :</span>
                                        &nbsp;  {name || ""}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-800 font-bold">
                                        <span className="text-gray-500 font-semibold" >Description :</span>
                                        &nbsp;    {description || ""}
                                    </p>
                                    <p className="text-gray-800 font-bold">
                                        <span className="text-gray-500 font-semibold" >Price :</span>
                                        &nbsp;    {price || ""}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                )}
            </div>
        </>
    );
};

export default DropZone;