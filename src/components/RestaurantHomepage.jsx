import React from "react";

const RestaurantHomepage = ({ img, Name, Address }) => {
    return (
        <>
            <div className="mt-7 px-9 min-[375px]:px-12 min-[425px]:px-20 md:px-1 md:ml-9 md:pr-8">
                <img src={img} alt="" className=""/>
                <div className="bg-black px-5 py-2 rounded-b-lg md:px-2 xl:px-4 xl:py-4 lg:px-4">
                    <h3 className="text-white font-bold text-md md:text-sm xl:text-xl">{Name}</h3>
                    <p className="text-white text-sm md:text-xs xl:text-lg">{Address}</p>
                </div>
            </div>
        </>
    );
};

export default RestaurantHomepage;