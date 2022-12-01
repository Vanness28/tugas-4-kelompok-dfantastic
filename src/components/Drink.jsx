import React from "react";

const Drink = ({ img, name, price }) => {
    return(
    <>
        <div className="relative mt-8 ml-12 min-[375px]:ml-16 min-[425px]:ml-24 md:ml-10 lg:ml-12 xl:mt-8 pr-8">
            <img src={img} alt="" className="rounded-lg w-56 min-[375px]:w-60 md:w-full h-44 min-[375px]:h-48 min-[425px]:h-52 md:h-52 lg:h-72 xl:h-96"/>
            <div className="absolute bg-gradient-to-r from-[#241A1A] to-transparent rounded-b-lg px-16 md:px-12 lg:px-16 bottom-0 py-2 lg:py-3 xl:py-4 text-white">
                <h1 className="font-semibold text-sm lg:text-lg xl:text-2xl -ml-12 md:-ml-9 lg:-ml-11">{name}</h1>
                <p className="text-xs lg:text-base xl:text-xl -ml-12 md:-ml-9 lg:-ml-11">{price}</p>
            </div>
        </div>
    </>    
    );
};

export default Drink;