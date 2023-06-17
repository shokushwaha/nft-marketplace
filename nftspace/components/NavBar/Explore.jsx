import React from 'react'
import Link from 'next/link';
const Explore = () => {
    const explore = [
        {
            name: "Author",
            link: "author",
        },
        {
            name: "Search",
            link: "searchPage",
        },
        {
            name: "Create NFT",
            link: "uploadNFT",
        },
        {
            name: "Update Listing Price",
            link: "updateListingPrice",
        },
    ];
    return (
        <>
            <div className='fixed mt-2 bg-gray-200 text-gray-800 p-2 rounded-md shadow border-b-2 border-gray-800'>

                {explore.map((el, i) => (
                    <div key={i + 1} >
                        <Link href={{ pathname: `${el.link}` }}
                            className='hover:text-black'
                        >{el.name}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Explore