import React from "react";

const Recommendation2 = ({ img, Name, }) => {
    return(
    <>
        <div className="relative mt-7 ml-9 pr-8 md:pr-10 lg:pr-10">
                <img src={img} alt="" className="rounded-lg w-screen "/>
            <div className="absolute bg-gradient-to-r from-[#241A1A] to-transparent rounded-bl-lg px-20 -bottom-0.5 py-1.5 text-white">
                <h1 className="font-semibold text-sm xl:text-2xl -ml-16">{Name}</h1>
                <p className="text-xs xl:text-lg -ml-16">Destinasi</p>
            </div>
        </div>
    </>    
    );
};

export default Recommendation2;