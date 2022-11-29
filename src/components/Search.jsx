import React from "react";
import IconSearch from "../assets/search.svg";

const Search = () => {
    return(
    <>
        <div class="mt-8 md:mt-10 lg:mt-12">
            <div class="flex bg-[#C4C4C4] opacity-80 ml-5 md:ml-9 xl:ml-14 mb-10 w-40 md:w-52 lg:w-72 xl:w-80 h-6 md:h-7 lg:h-10 rounded-md">
                <p class="pl-2 pt-0.5 md:pt-1 lg:pt-2 pr-16 md:pr-24 lg:pr-44 xl:pr-52 text-black text-sm font-bold">Search.....</p>
                <img src={IconSearch} alt="" className="" />
            </div>
        </div>
    </> 
    );
};

export default Search;