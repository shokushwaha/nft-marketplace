import React from "react";
import Image from "next/image";
import images from "../../img";

const Loader = () => {
    return (
        <div>
            <div >
                <div className="flex items-center justify-center">
                    <div className="banter-loader">
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;