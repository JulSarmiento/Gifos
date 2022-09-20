import React from "react";
// import GifoCard from "../components/gifoCard";
import favoriteLogo from "../assets/imgs/icon-favoritos.svg"


function Favourites(){
  return (
    
    <div>
      <div className="flex flex-col justify-center align-middle text-center mt-[5px]">
        <img className="h-[28px]" src={favoriteLogo} alt="Logo de corazon para imagen de favoritos" />
        <h1 className="font-montserrat font-bold text-purple text-[20px] mt-[7px] lg:text-lg">Favoritos</h1>
      </div>
      
      
    </div>
  )
}

export default Favourites;