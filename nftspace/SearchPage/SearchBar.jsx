'use client'
import React, { useEffect, useState } from "react";
const SearchBar = ({ onHandleSearch, onClearSearch }) => {
    const [search, setSearch] = useState("");
    const [searchItem, setSearchItem] = useState(search);

    useEffect(() => {
        const timer = setTimeout(() => setSearch(searchItem), 1000);
        return () => clearTimeout(timer);
    }, [searchItem]);

    useEffect(() => {
        if (search) {
            onHandleSearch(search);
        } else {
            onClearSearch();
        }
    }, [search]);
    return (
        <>
            <div className="w-3/5 flex items-center justify-center gap-2 mx-auto px-4 py-4 mt-4 border-b-2 border-gray-400">
                <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </span>

                <input
                    type="text"
                    placeholder="Type yout keyword...."
                    onChange={(e) => setSearchItem(e.target.value)}
                    value={searchItem}
                    className="px-4 py-2  rounded-md shaodow  placeholder:text-gray-500 bg-gray-200 shadow"
                />
            </div>

        </>
    )
}

export default SearchBar