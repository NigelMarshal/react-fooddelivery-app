import React from 'react';

const Search = ({ placeholder, handleSearch }) => {

    return (
        <div className="container mx-auto pt-6 ">
            <h2 className="flex justify-left max-w-screen-sm mx-auto px-10 pb-5 text-2xl font-semibold">Search</h2>
            <div className="flex justify-center max-w-screen-sm mx-auto overflow-hidden px-10">
                <div className="w-full h-10 pl-3 pr-2 bg-white border-2 flex justify-between rounded-md items-center relative py-6">
                    <div className="mr-3 outline-none focus:outline-none active:outline-none">
                        <svg fill="none" stroke="#838DA6" viewBox="0 0 24 24" className="w-6 h-6">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="text" name="query" placeholder={placeholder} onChange={handleSearch}
                        className="appearance-none w-full outline-none focus:outline-none active:outline-none" />
                </div>
            </div>
        </div>

    );
}

export default Search;