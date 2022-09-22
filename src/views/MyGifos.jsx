import React from "react";
// import { useEffect } from "react";
// import { useCallback } from "react";
// import { useState } from "react";
import myGifos from "../assets/imgs/icon-mis-gifos.svg"
import noMyGifos from "../assets/imgs/icon-mis-gifos-sin-contenido.svg"


function MyGifos() {
  // const [gifos, setGifos] = useState(JSON.parse(localStorage.getItem('myGifos') || []));

  // const isCreated = useCallback((gifId) => gifos.findIndex( gif => gif.id === gifId), [gifos]);

  // useEffect(() => {
  //   localStorage.setItem('myGifos', JSON.stringify(gifos));
  // }, [gifos]);

  return (
    <div className=" overflow-hidden pt-[11px] bg-white dark:bg-dark-gray dark:text-cian">

      <div className="flex flex-col justify-center w-screen align-middle text-center mx-auto pt-[11px]">
        <img className="h-[28px]" src={myGifos} alt="Logo de corazon para imagen de favoritos" />
        <h1 className="font-montserrat font-bold text-purple text-[20px] mt-[7px] lg:text-lg dark:text-cian">Mis Gifos</h1>
      </div>

      <div className="flex flex-col bg-white dark:bg-dark-gray">

        <div className=" flex flex-col justify-center mx-auto mt-[110px] mb-[137px]">
          <img src={noMyGifos} alt="No hay favoritos" className="h-[150px] w-[150px] mx-auto mb-[24px]"/>
          <p className="text-cian font-montserrat font-bold text-md lg:text-[20px]  w-[300px] lg:w-[431px] text-center">
            Animate a crear tus propios gifos!
          </p>
        </div>

      </div>

    </div>
  )
}

export default MyGifos;