import React from "react";
import Image from "next/image";
import images from "../../img";

const Loader = () => {
    return (
        <div>
            <div >
                <div >
                    <Image
                        src={images.loader}
                        alt="loader"
                        width={200}
                        height={200}

                    />
                </div>
            </div>
        </div>
    );
};

export default Loader;