import React from "react";
import Star from "../assets/star.svg";

const DestinationHome = ({ img, Name, Address }) => {
    return (
    <>
        <div className="mt-7 md:ml-9 xl:mt-9 xl:ml-12"> 
            <img src={img} alt="" className="w-40 lg:w-52 xl:w-72 rounded-md"/>
            <div className="mt-2 space-y-2 xl:space-y-4">
                <h3 className="font-bold text-black text-sm lg:text-lg xl:text-2xl">{Name}</h3>
                <div className="flex flex-row space-x-1.5 lg:space-x-2">
                    <img src={Star} alt="" className="w-5 lg:w-7 xl:w-9" />
                    <img src={Star} alt="" className="w-5 lg:w-7 xl:w-9" />
                    <img src={Star} alt="" className="w-5 lg:w-7 xl:w-9" />
                    <img src={Star} alt="" className="w-5 lg:w-7 xl:w-9" />
                    <img src={Star} alt="" className="w-5 lg:w-7 xl:w-9" />
                </div>
                <p className="text-xs lg:text-base xl:text-lg text-[#808080]">{Address}</p>
            </div>        
        </div>
    </>
    );
};

export default DestinationHome;