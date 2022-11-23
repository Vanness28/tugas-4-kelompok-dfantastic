import React from "react";
import Pic from "../assets/walpaper.jpeg";
import Icon1 from "../assets/ic_destination.svg";
import Icon2 from "../assets/ic_culiner.svg";

const Background = () => {
    return(
    <>
        <div className="">
            <div className="absolute mt-4 pl-4 pr-4 min-[375px]:mt-5 min-[425px]:mt-6 md:mt-10 md:pl-8 md:pr-8 lg:mt-8 xl:mt-12 xl:pl-12 xl:pr-12">
                <img src={Pic} alt="" className="w-screen h-full rounded-lg md:rounded-xl"/>
            </div>
            <div className="absolute min-[320px]:mt-24 min-[320px]:ml-10 min-[375px]:mt-28 min-[375px]:ml-16 min-[425px]:mt-32 min-[425px]:ml-24 md:mt-10 md:ml-12 lg:mt-28 lg:ml-14 xl:mt-64 xl:ml-72">
                <div className="bg-white rounded-lg md:rounded-2xl mx-auto w-60 min-[320px]:h-5 min-[375px]:h-7 mt-1 md:ml-44 md:mt-56 lg:ml-64 md:w-80 md:h-12 lg:w-96 lg:h-16"></div>
                <div className="flex absolute top-0 md:mt-56 md:ml-40 lg:ml-64">
                <div className="absolute bg-black w-0.5 h-5 min-[375px]:h-7 ml-32 md:ml-44 lg:ml-52 mt-1 md:mt-0 md:h-12 lg:h-16 opacity-60"></div>
                    <p className="text-xs md:text-base lg:text-xl xl:text-xl font-bold pt-1.5 min-[375px]:pt-2.5 pl-6 lg:pl-3 lg:pt-4">
                        100<span className="pl-2 font-normal">Destination</span>
                    </p>
                    <img src={Icon1} alt="" className="w-4 md:w-5 lg:w-7 ml-2 lg:ml-3 pt-1.5 min-[375px]:pt-2.5 lg:pt-4"/>
                    <p className="ml-3 md:ml-9 lg:ml-7 text-xs md:text-base lg:text-xl xl:text-xl font-bold pt-1.5 min-[375px]:pt-2.5 lg:pt-4">
                        100<span className="pl-2 font-normal">Culiner</span>
                    </p>
                    <img src={Icon2} alt="" className="w-4 md:w-5 lg:w-7 ml-2 lg:ml-3 pt-1.5 min-[375px]:pt-2.5 lg:pt-4"/>
                </div>
            </div>
        </div>
    </> 
    );
};

export default Background;