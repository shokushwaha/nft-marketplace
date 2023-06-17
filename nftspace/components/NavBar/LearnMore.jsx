import React from 'react'
import Link from 'next/link';
const LearnMore = () => {
    const learnMore = [
        {
            name: "About",
            link: "aboutus",
        },
        {
            name: "Contact Us",
            link: "contactus",
        },
    ];
    return (
        <>
            <div className='fixed mt-2 bg-gray-200 text-gray-800 p-2 rounded-md shadow border-b-2 border-gray-800'>

                {learnMore.map((el, i) => (
                    <div key={i + 1}>
                        <Link href={{ pathname: `${el.link}` }} className='hover:text-black '>{el.name}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LearnMore