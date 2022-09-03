import React from "react";
import ResultsContainer from "../components/resultsContainer"
import homeImage from "../assets/imgs/ilustra_header.svg"


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mx-14 text-center font-bold text-purple font-montserrat text-llg mb-16">Inspirate, busca, guarda, y crea los mejores <span className="text-cian">GIFOS</span></h1>

      <div>
        <img className="h-36" src={homeImage} alt="" />
        <div className="border rounded-3xl border-purple h-12 flex justify-center align-center items-center">
          <input className="outline-0" type="text" id="search-input" name="search-input"/>
          <button><span className="text-purple material-symbols-outlined ">search</span></button> 
        </div>
      </div>

      <ResultsContainer/>
    </div>
  )
}

