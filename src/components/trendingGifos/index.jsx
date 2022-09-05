import React, { useEffect, useRef, useState } from "react";
import { getTrendyGifos } from "../../services/giphi";

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
    <div className="text-center bg-light-gray ">
      <div className="mt-4 mb-18">
        <h2 className="font-montserrat font-bold text-purple text-md mb-2">Trending GIFOS</h2>
        <p className="font-roboto text-sm leading-4 ">Mira los ultimos GIFOS de nuestra comunidad.</p>
      </div>

      <div className="flex flex-row items-center gap-2 p-8">
        <span className="material-symbols-outlined hidden lg:grid h-[40px] w-[40px] pl-2 place-content-center text-purple border border-purple hover:text-white hover:bg-purple" onClick={slideLeft}> arrow_back_ios </span>

        <div ref={slider} className=" relative flex gap-6 items-center overflow-x-scroll scroll-smooth scrollbar-hide">
          {tendryGifos.map((item) =>  <img className=" w-[243px] h-[187px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300" key={item.id} src={item.images.downsized.url} alt={item.title} /> )}
        </div>

        <span className="material-symbols-outlined hidden lg:grid h-[40px] w-[40px] p-1 place-content-center text-purple border border-purple hover:text-white hover:bg-purple" onClick={slideRight}> arrow_forward_ios </span>
      </div>

    </div>
  )
}

export default TrendingGifos;

