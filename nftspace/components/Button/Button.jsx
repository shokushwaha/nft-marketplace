'use client'
import React from "react";


const Button = ({ btnName, handleClick, icon, classStyle }) => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center  bg-yellow-200 w-28 px-4 py-1 rounded-md shadow hover:scale-105  hover:animate-pulse">
            <button
                onClick={() => handleClick()}
            >
                {icon} {btnName}
            </button>
        </div>
    );
};

export default Button;