import React from "react";
import Profil from "../assets/profil.jpeg";
import Menu from "../assets/menu.svg";

const Header = () => {
    return(
    <>
        <div className="flex items-center px-4 py-3 md:px-10 border-b-2 border-[#E5E5E5]">
            <h1 className="text-[#3252DF] font-semibold md:text-xl xl:text-2xl">Tomohon<span className="text-[#152C5B]">Loka</span></h1>
            <nav className="hidden md:block">
                <ul className="flex space-x-12 lg:space-x-16 xl:space-x-20 text-[#152C5B] font-medium xl:text-xl ml-28 lg:ml-56 xl:ml-96">
                    <li><a href="#" className="text-[#3252DF]">Home</a></li>
                    <li><a href="#"></a>Destination</li>
                    <li><a href="#"></a>Culiner</li>
                </ul>
            </nav>

            <div class="ml-28 lg:ml-56 xl:ml-80 hidden md:block">
                <img src={Profil} alt="" className="rounded-full w-12" />
            </div>

            <div className="md:hidden relative">
                <button><img src={Menu} alt="" className="w-6 mt-1 min-[320px]:ml-40 min-[375px]:ml-52 min-[425px]:ml-64"/></button>
            </div>
        </div>
    </> 
    );
};

export default Header;