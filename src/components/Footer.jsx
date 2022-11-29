import React from "react";
import SosialMedia from "../assets/Sosial Media.svg";

const Footer = () => {
    return (
        <>
            <div class="grid grid-cols-1 gap-3 space-x-2 py-6 text-center mt-14 md:grid-cols-4 md:text-left md:gap-4 md:px-14 lg:grid-cols-4 lg:gap-1 lg:px-20 lg:py-20 lg:space-x-5 border-t-2 border-[#E5E5E5]">
            <div class="pl-2">
                <h4 class="text-[#3252DF] font-bold text-sm lg:text-lg xl:text-xl mb-3">Tomohon<span class="text-[#152C5B]">Loka</span></h4>
                <p class="text-[#B0B0B0] text-xs lg:text-md xl:text-lg">This website would representing informations about destination and restaurant in Tomohon City.</p>
            </div>
            <div>
                <h3 class="text-[#3252DF] font-bold text-sm lg:text-lg xl:text-xl mb-3">Information</h3>
                <p class="text-[#B0B0B0] text-xs lg:text-md xl:text-lg">Destination</p>
                <p class="text-[#B0B0B0] text-xs lg:text-md xl:text-lg">Culiner</p>
                <p class="text-[#B0B0B0] text-xs lg:text-md xl:text-lg">Recommendation</p>
            </div>
            <div>
                <h3 class="text-[#3252DF] font-bold text-sm lg:text-lg xl:text-xl mb-3">Contact</h3>
                <p class="text-[#B0B0B0] text-xs lg:text-md xl:text-lg">20013027@unikadelasalle.ac.id</p>
                <p class="text-[#B0B0B0] text-xs lg:text-md xl:text-lg">20013027@unikadelasalle.ac.id</p>
            </div>
            <div className="pl-0 md:pl-8 lg:pl-4">
                <h3 class="text-[#3252DF] font-bold text-md lg:text-lg xl:text-xl mb-3">Social</h3>
                <img src={SosialMedia} alt="" class="w-32 md:w-40 lg:w-52 mx-24 min-[375px]:mx-32 min-[425px]:mx-36 md:ml-0 "/>
            </div>
        </div>
        <div class="px-2 text-xs lg:text-sm xl:text-md font-semibold py-3 border-t-2 border-[#E5E5E5]">
            <p class="text-center text-[#B0B0B0]">COPYRIGHT © 2022-2024. ALL RIGHTS RESERVED, TOMOHONLOKA.</p>
        </div>
        </>
    );
};

export default Footer;