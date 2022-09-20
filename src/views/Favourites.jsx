import React, { useContext } from "react";
import FavoriteGifos from "../contexts/FavoritesContext"
import GifoCard from "../components/gifoCard";
import TrendingGifos from "../components/trendingGifos"
import favoriteLogo from "../assets/imgs/icon-favoritos.svg"

import noFavs from "../assets/imgs/icon-mis-gifos-sin-contenido.svg"


function Favourites(){

  const [gifos] = useContext(FavoriteGifos);

  return (
    
    <div className="overflow-hidden bg-white dark:bg-dark-gray pt-[11px] overflow-hidden">
      <div className="flex flex-col justify-center w-screen align-middle text-center mx-auto ">
        <img className="h-[28px]" src={favoriteLogo} alt="Logo de corazon para imagen de favoritos" />
        <h1 className="font-montserrat font-bold text-purple text-[20px] mt-[7px] lg:text-lg">Favoritos</h1>
      </div>


      <div className="flex flex-col bg-white dark:bg-dark-gray ">
        {
          Object.values(gifos).length === 0 ?

            <div className=" flex flex-col justify-center mx-auto mt-[110px] mb-[137px]">
              <img src={noFavs} alt="No hay favoritos" className="h-[150px] w-[150px] mx-auto mb-[24px]"/>
              <p className="text-cian font-montserrat font-bold text-md lg:text-[20px]  w-[300px] lg:w-[431px] text-center">
                Guarda tu primer GIFO en Favorito para que se muestre aqui!
              </p>
            </div>           
          :
            <div className="mx-auto flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 mt-[56px] px-[21px] mx-auto   ">
                {
                  gifos.map(gif => <GifoCard key={gif.id}  gif={gif} sizes={"sm:h-[120px] sm:w-[158px] lg:h-[200px] lg:w-[260px] xl:h-[200px] xl:w-[260px] bg-loading"} />)
                }
              </div>
              <button className="mx-auto border border-purple rounded-3xl h-[50px] w-[127px] text-purple font-montserrat font-bold mt-[78px] mb-[78px] hover:text-white hover:border-purple hover:bg-purple  dark:text-white dark:border-white dark:bg--gray  dark:hover:text-black dark:hover:border-white dark:hover:bg-white  ">Ver mas</button>
            </div>
        }
      </div>

      <TrendingGifos/>
      
    </div>
  )
}

export default Favourites;