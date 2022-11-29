import React from "react";
import Rekom4 from "../assets/rekom4.png";
import Rekom5 from "../assets/rekom5.png";
import Rekom6 from "../assets/rekom6.png";

const Recommendation3 = () => {
    return(
    <>
    <div className="grid grid-cols-1 gap-3 md:grid md:grid-cols-3 md:gap-5 md:pr-20 lg:pr-12 xl:pr-10">
        <div className="relative mt-7 ml-10 pr-8 md:w-64 lg:w-80 xl:w-full">
                <img src={Rekom4} alt="" className="rounded-lg w-screen"/>
            <div className="absolute bottom-2 left-6 md:left-4 text-white xl:left-8">
                <h1 className="font-semibold text-sm xl:text-2xl">Gardenia Country Inn</h1>
                <p className="text-xs xl:text-lg">Restaurant</p>
            </div>
        </div>
        <div className="relative mt-7 ml-10 pr-8 md:w-64 lg:w-80 xl:w-full">
                <img src={Rekom5} alt="" className="rounded-lg w-screen"/>
            <div className="absolute bottom-2 left-6 md:left-4 text-white xl:left-8">
                <h1 className="font-semibold text-sm xl:text-2xl">Green Garden Restoran</h1>
                <p className="text-xs xl:text-lg">Restaurant</p>
            </div>
        </div>
        <div className="relative mt-7 ml-10 pr-8 md:w-64 lg:w-80 xl:w-full">
                <img src={Rekom6} alt="" className="rounded-lg w-screen"/>
            <div className="absolute bottom-2 left-6 md:left-4 text-white">
                <h1 className="font-semibold text-sm xl:text-2xl">Linou Restoran</h1>
                <p className="text-xs xl:text-lg">Restaurant</p>
            </div>
        </div>
    </div>
    </>    
    );
};

export default Recommendation3;