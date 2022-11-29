import React from "react";
import Rekom1 from "../assets/rekom1.png";

const Recommendation1 = () => {
    return(
    <>
        <div className="relative mt-7 ml-9 pr-8">
            <img src={Rekom1} alt="" className="rounded-lg w-screen h-36 md:h-44 lg:h-60 xl:h-96"/>
            <div className="absolute bottom-2 left-6 text-white">
                <h1 className="font-semibold text-sm xl:text-2xl">Danau Linou</h1>
                <p className="text-xs xl:text-lg">Destination</p>
            </div>
        </div>
    </>    
    );
};

export default Recommendation1;