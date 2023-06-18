'use client'
import React from "react";
import Image from "next/image";
import { FiCopy } from "react-icons/fi";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialYoutube,
    TiSocialInstagram,
    TiSocialTwitter,
} from "react-icons/ti";
import images from "../img";
const ProfileCard = ({ currentAccount }) => {
    const copyAddress = () => {
        const copyText = document.getElementById("myInput");

        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    };
    return (
        <>
            <div className="flex items-center w-11/12 mx-auto mt-12" >

                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>



                <div className="flex flex-col">
                    <span className="flex items-center gap-4">
                        <input type="text" defaultValue={currentAccount} id="myInput" />
                        <FiCopy
                            onClick={() => copyAddress()}
                        />
                    </span>


                    <p>
                        The most secure marketplace for buying and selling unique crypto
                        assets.
                    </p>

                    <div className="flex " >
                        <a
                            href="https://www.facebook.com/profile.php?id=100009096397038"
                            target="_blank"
                        >
                            <TiSocialFacebook />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/oluwatimilehin-bello/"
                            target="_blank"
                        >
                            <TiSocialLinkedin />
                        </a>
                        <a href="https://twitter.com/Timmee_Bello" target="_blank">
                            <TiSocialTwitter />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCDyKFRctmBNBRm1o8-MY4hA"
                            target="_blank"
                        >
                            <TiSocialYoutube />
                        </a>
                        <a href="https://www.instagram.com/teemee_bello/" target="_blank">
                            <TiSocialInstagram />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileCard