import React, { useContext, useState } from "react";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Button } from "../components/componentsindex.js";
import { DropZone } from "./uploadNFTindex";

const UploadNFT = ({ uploadToIPFS, createNFT }) => {
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const router = useRouter();


    return (
        <>
            <div className="flex items-center justify-center gap-40">


                <DropZone
                    title="JPG, PNG, WEBM , MAX 100MB"
                    heading="Drag & drop file"
                    subHeading="or Browse media on your device"
                    name={name}
                    description={description}
                    setImage={setImage}
                    uploadToIPFS={uploadToIPFS}
                    price={price}
                />


                <div className="flex flex-col gap-4 px-4 py-2 mt-8">
                    <div className="flex items-start justify-between gap-4 pb-2 border-b-2 border-gray-200 " >
                        <label htmlFor="nft">NFT Name</label>
                        <input
                            type="text"
                            placeholder="Name...."
                            onChange={(e) => setName(e.target.value)}
                            className="rounded-md bg-gray-200 px-4 py-1"
                        />
                    </div>

                    <div className="flex items-start justify-between gap-4 pb-2 border-b-2 border-gray-200">
                        <label htmlFor="description">Info</label>
                        <textarea
                            name="Info"
                            id="1"
                            cols="24"
                            rows="4"
                            placeholder="Info...."
                            onChange={(e) => setDescription(e.target.value)}
                            className="rounded-md bg-gray-200 px-4 py-1"
                        ></textarea>
                    </div>


                    <div className="flex items-start justify-between gap-4 pb-2 border-b-2 border-gray-200">
                        <label htmlFor="Price">Price (ETH)</label>

                        <input
                            type="number"
                            placeholder="Price"
                            onChange={(e) => setPrice(e.target.value)}
                            className=" rounded-md bg-gray-200 px-4 py-1"
                        />

                    </div>


                    <div className="mx-auto">
                        <Button
                            btnName="Upload"
                            handleClick={async () =>
                                createNFT(name, price, image, description, router)
                            }
                        />
                    </div>
                </div>
            </div >
        </>
    );
};

export default UploadNFT;