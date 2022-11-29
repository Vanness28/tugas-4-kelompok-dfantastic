import React from "react";
import Rekom2 from "../assets/rekom2.png";
import Rekom3 from "../assets/rekom3.png";

const Recommendation2 = () => {
    return(
    <>
        <div className="relative mt-7 ml-9 pr-8 md:pr-1.5 lg:pr-10">
                <img src={Rekom2} alt="" className="rounded-lg w-screen"/>
            <div className="absolute bottom-2.5 left-3 text-white xl:left-6">
                <h1 className="font-semibold text-sm xl:text-2xl">Puncak Narwastu</h1>
                <p className="text-xs xl:text-lg">Destination</p>
            </div>
        </div>
            <div className="relative mt-7 ml-9 pr-8 sm:ml-2">
                <img src={Rekom3} alt="" className="rounded-lg w-screen"/>
            <div className="absolute bottom-2.5 left-3 text-white lg:left-5">
                <h1 className="font-semibold text-sm xl:text-2xl">Puncak Melby'Ls</h1>
                <p className="text-xs xl:text-lg">Destination</p>
            </div>
        </div>
    </>    
    );
};

export default Recommendation2;