import React from "react";
import ResultsContainer from "../components/resultsContainer"
import homeImage from "../assets/imgs/ilustra_header.svg"
import Trending from "../components/trending";
import TrendingGifos from "../components/trendingGifos";
import SearchBar from "../components/searchBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-dark-gray  lg:pt-[113px]">
      <h1 className="mx-14 text-center font-bold text-purple font-montserrat text-llg mb-16 dark:text-white">Inspirate, busca, guarda, y crea los mejores <span className="text-cian">GIFOS</span></h1>

      <div className="mb-8">
        <img className="h-36 h-[130px] w-[273px] lg:h-[190px] lg:w-[399px]" src={homeImage} alt="" />
        <div className="border rounded-3xl border-purple h-12 flex justify-center align-center items-center dark:border-white">
          <SearchBar/>
        </div>
      </div>

      <div className="mb-10">
        <Trending />
      </div>
        
      <div  className="mb-10 mx-16">
        <ResultsContainer/>
      </div>

      <div className="mb-10 w-full">
        <TrendingGifos/>
      </div>
    </div>
  )
}

