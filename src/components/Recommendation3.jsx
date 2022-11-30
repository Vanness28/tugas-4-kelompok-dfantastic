import React from "react";
import Rekom4 from "../assets/rekom4.png";
import Rekom5 from "../assets/rekom5.png";
import Rekom6 from "../assets/rekom6.png";

const Recommendation3 = () => {
    return(
    <>
    <div className="grid grid-cols-1 mt-3 gap-3 md:mt-0 md:grid md:grid-cols-3 md:gap-5 md:pr-20 lg:pr-12 xl:pr-10">
        <div className="relative mt-4 md:mt-7 ml-9 pr-8 md:w-64 lg:w-80 xl:w-full">
                <img src={Rekom4} alt="" className="rounded-lg w-screen h-36 min-[375px]:h-40 min-[425px]:h-48 md:h-full"/>
            <div className="absolute bg-gradient-to-r from-[#241A1A] to-transparent rounded-bl-lg px-20 -bottom-0.5 py-1.5 md:pr-16 text-white">
                <h1 className="font-semibold text-sm xl:text-2xl -ml-16">Gardenia Country Inn</h1>
                <p className="text-xs xl:text-lg -ml-16">Restaurant</p>
            </div>
        </div>
        <div className="relative mt-4 md:mt-7 ml-9 pr-8 md:w-64 lg:w-80 xl:w-full">
                <img src={Rekom5} alt="" className="rounded-lg w-screen h-36 min-[375px]:h-40 min-[425px]:h-48 md:h-full"/>
            <div className="absolute bg-gradient-to-r from-[#241A1A] to-transparent rounded-bl-lg px-20 -bottom-0.5 py-1.5 md:pr-16 text-white">
                <h1 className="font-semibold text-sm xl:text-2xl -ml-16">Green Garden Restoran</h1>
                <p className="text-xs xl:text-lg -ml-16">Restaurant</p>
            </div>
        </div>
        <div className="relative mt-4 md:mt-7 ml-9 pr-8 md:w-64 lg:w-80 xl:w-full">
                <img src={Rekom6} alt="" className="rounded-lg w-screen h-36 min-[375px]:h-40 min-[425px]:h-48 md:h-full"/>
            <div className="absolute bg-gradient-to-r from-[#241A1A] to-transparent rounded-bl-lg px-20 -bottom-0.5 py-1.5 md:pr-16 text-white">
                <h1 className="font-semibold text-sm xl:text-2xl -ml-16">D-Linow Restoran</h1>
                <p className="text-xs xl:text-lg -ml-16">Restaurant</p>
            </div>
        </div>
    </div>
    </>    
    );
};

export default Recommendation3;