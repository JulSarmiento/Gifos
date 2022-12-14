import React, {useContext}  from "react";
import ResultsContainer from "../components/resultsContainer"
import homeImage from "../assets/imgs/ilustra_header.svg"
import Trending from "../components/trending";
import TrendingGifos from "../components/trendingGifos";
import SearchBar from "../components/searchBar";
import TopicToSearch from "../contexts/SearchContext";

export default function Home() {
  const [topic] = useContext(TopicToSearch);


  return (
    <div className="flex flex-col items-center bg-white dark:bg-dark-gray  lg:pt-[113px] overflow-hidden">
      <h1 className="mx-14 text-center font-bold text-purple font-montserrat text-llg mb-16 dark:text-white">Inspirate, busca, guarda, y crea los mejores <span className="text-cian">GIFOS</span></h1>

      <div className="mb-8 flex justify-center flex-col">
        {topic === ''? 
          <img className="h-36 h-[130px] w-[334px] lg:h-[190px] lg:w-[551px]" src={homeImage} alt="/" />
          :          
          <img className="hidden lg:flex" src={homeImage} alt="/" />
        }
        <div className="border rounded-3xl border-purple flex justify-center items-center dark:border-white w-[347px]  lg:w-[551px]">
          <SearchBar/>
        </div>
      </div>

      <div className="mb-10">
        <Trending />
      </div>
        
      <div className="mb-10">
        <ResultsContainer/>
      </div>

      <div className="mb-10 w-full">
        <TrendingGifos/>
      </div>
    </div>
  )
}

