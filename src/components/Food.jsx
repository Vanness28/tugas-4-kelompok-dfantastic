import React from "react";

const Food = ({ img, name, price, recommended }) => {
    return(
    <>
        <div className="relative mt-8 ml-12 min-[375px]:ml-16 min-[425px]:ml-24 md:ml-10 lg:ml-12 xl:mt-8 pr-8">
            <img src={img} alt="" className="rounded-lg w-56 min-[375px]:w-60 md:w-full h-44 min-[375px]:h-48 min-[425px]:h-52 md:h-52 lg:h-72 xl:h-96"/>
            <div class="flex absolute top-2 left-4 w-5 lg:w-4 space-x-1.5">
                <p class="font-semibold lg:text-lg text-xl text-[#FF6B59]">{recommended}</p>
            </div>
            <div className="absolute bg-gradient-to-r from-[#241A1A] to-transparent rounded-b-lg px-16 md:px-14 lg:px-20 bottom-0 py-2 lg:py-3 xl:py-4 text-white">
                <h1 className="font-semibold text-sm lg:text-lg xl:text-2xl -ml-12 md:-ml-11 lg:-ml-16">{name}</h1>
                <p className="text-xs lg:text-base xl:text-xl -ml-12 md:-ml-11 lg:-ml-16">{price}</p>
            </div>
        </div>
    </>    
    );
};

export default Food;