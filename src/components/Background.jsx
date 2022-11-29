import React from "react";
import Pic from "../assets/walpaper.jpeg";
import Icon1 from "../assets/ic_destination.svg";
import Icon2 from "../assets/ic_culiner.svg";

const Background = () => {
    return(
    <>
        <div className="">
            <div className="mt-4 pl-4 pr-4 min-[375px]:mt-5 min-[425px]:mt-6 md:mt-10 md:pl-8 md:pr-8 lg:mt-8 xl:mt-12 xl:pl-12 xl:pr-12">
                <img src={Pic} alt="" className="w-screen h-full rounded-lg md:rounded-xl"/>
            </div>
            <div className="absolute min-[320px]:-mt-9 min-[320px]:ml-10 min-[375px]:-mt-10 min-[375px]:ml-16 min-[425px]:-mt-12 min-[425px]:ml-24 md:-mt-72 md:ml-12 lg:-mt-80 lg:ml-14 xl:ml-72">
                <div className="bg-white shadow-lg shadow-black rounded-lg mx-auto w-60  mt-1 min-[320px]:h-5 min-[375px]:h-7 md:rounded-2xl md:w-80 md:h-12 md:ml-44 md:mt-56 lg:ml-64 lg:w-96 lg:h-16"></div>
                <div className="flex absolute top-0 md:mt-56 md:ml-40 lg:ml-64">
                <div className="absolute bg-black w-0.5 h-5 mt-1 ml-32 opacity-60 min-[375px]:h-7 md:ml-44 md:mt-0 md:h-12 lg:ml-52 lg:h-16"></div>
                    <p className="text-xs font-bold pt-1.5 pl-3 min-[375px]:pt-2.5 md:pl-6 md:text-base lg:pl-4 lg:text-xl lg:pt-4 xl:text-xl">
                        100<span className="pl-2 font-normal">Destination</span>
                    </p>
                    <img src={Icon1} alt="" className="w-4 ml-2 pt-1.5 min-[375px]:pt-2.5 md:w-5 lg:w-7 lg:ml-3 lg:pt-4"/>
                    <p className="ml-3 text-xs font-bold pt-1.5 min-[375px]:pt-2.5 md:text-base md:ml-9 lg:ml-7 lg:pt-4 lg:text-xl xl:text-xl">
                        100<span className="pl-2 font-normal">Culiner</span>
                    </p>
                    <img src={Icon2} alt="" className="w-4 ml-2 pt-1.5 min-[375px]:pt-2.5 md:w-5 lg:w-7 lg:ml-3 lg:pt-4"/>
                </div>
            </div>
        </div>
    </> 
    );
};

export default Background;