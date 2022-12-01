import React from "react";
import DestinationImage1 from "../assets/detailwisata1.png";
import Star from "../assets/star.svg";

const DetailDestination1 = () => {
    return(
    <>
        <div className="flex flex-row space-x-2. md:space-x-8 md:ml-10 md:mt-10 ml-4 mt-8">
            <img src={DestinationImage1} alt="" className="w-40 h-36 rounded-lg min-[425px]:w-44 md:w-[420px] md:h-[320px] xl:w-[620px] xl:h-[420px]" />
            <div className="flex flex-col space-y-1.5 mx-1 md:space-y-2 md:-mt-6 xl:space-y-4 -mt-1">
                <h2 className="font-bold text-lg md:mt-7 md:text-2xl lg:text-5xl">Danau Linow</h2>
                <h3 className="font-semibold text-[#B0B0B0] text-xs md:text-base lg:text-lg xl:text-3xl">Rp 35.000 / orang</h3>
                <h3 className="font-semibold text-[#B0B0B0] text-xs md:text-base hidden md:block lg:text-lg xl:text-3xl">Lahendong Jl. Linow, Tomohon, Sulawesi Utara 95435</h3>
                <h3 className="font-semibold text-[#B0B0B0] text-xs md:text-base md:hidden">Lahendong, Tomohon</h3>
                <div className="flex flex-row space-x-1.5 lg:space-x-2 w-4 md:w-5 md:pt-2 lg:w-6 xl:w-14">
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                </div>
                <p className=" text-[#B0B0B0] text-sm md:text-md md:pr-0 hidden md:pt-2 md:block lg:text-base lg:pr-20 xl:text-2xl">Kawasan Danau Linow memiliki udara sejuk dengan keindahan pemandangan alam. Danau Linow memiliki kadar belerang yang sangat tinggi sehingga menyebabkan warna air danau mudah berubah warna.</p>
                <p className=" text-[#B0B0B0] text-xs md:pr-40 md:hidden min-[375px]:pr-14 min-[425px]:pr-12">Kawasan Danau Linow memiliki udara sejuk dengan...</p>
            </div>
        </div>  
    </>
    );
};

export default DetailDestination1;