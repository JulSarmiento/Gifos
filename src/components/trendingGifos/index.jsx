import React, { useEffect, useRef, useState } from "react";
import { getTrendyGifos } from "../../services/giphi";
import GifoCard from "../gifoCard";

function TrendingGifos() {
  const [tendryGifos, setTrendingGifos] = useState([]);
  const slider = useRef();


  const slideLeft = () => {
    slider.current.scrollLeft -=  500
  };

  const slideRight = () => {
    slider.current.scrollLeft +=  500
  };

  useEffect(() => {
    getTrendyGifos().then(({data}) => {
      setTrendingGifos(data);
    })
  }, []);

  return (
    <div className="text-center bg-light-gray py-8 lg:px-[94px] dark:bg-light-black ">
      <div className="mt-4 mb-18 dark:text-white">
        <h2 className="font-montserrat font-bold text-purple text-md mb-2 dark:text-white">Trending GIFOS</h2>
        <p className="font-roboto font-medium text-sm leading-4 ">Mira los ultimos</p>
        <p className="font-roboto font-medium text-sm leading-4 mt-2 ">GIFOS de nuestra comunidad.</p>
      </div>

      <div className="flex flex-row items-center gap-2 p-8">
        <span className="material-symbols-outlined hidden lg:grid h-[40px] w-[40px] pl-2 place-content-center text-purple border border-purple hover:text-white hover:bg-purple dark:text-white dark:border-white hover:dark:bg-white hover:dark:text-light-black " onClick={slideLeft}> arrow_back_ios </span>

        <div ref={slider} className=" gap-4 relative flex items-center overflow-x-scroll scroll-smooth scrollbar-hide">
          {tendryGifos.map((gif) => <GifoCard key={gif.id} gif={gif} sizes={"sm:h-[187px] sm:w-[243px] lg:h-[275px] lg:w-[357px] xl:h-[275}px] xl:w-[357px] bg-loading"} />)}
        </div>

        <span className="material-symbols-outlined hidden lg:grid h-[40px] w-[40px] p-1 place-content-center text-purple border border-purple hover:text-white hover:bg-purple dark:text-white dark:border-white hover:dark:bg-white hover:dark:text-light-black" onClick={slideRight}> arrow_forward_ios </span>
      </div>

    </div>
  )
}

export default TrendingGifos;

