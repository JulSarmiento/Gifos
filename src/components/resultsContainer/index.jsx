import React, { useContext, useEffect } from "react";
import { useState } from "react";
import TopicToSearch from "../../contexts/SearchContext";
import { getSearch } from "../../services/giphi";
import GifoCard from "../gifoCard";

// pendiente paginacion porque no tengo idea de que hacer ahi

function ResultsContainer() {

  const [pagination, setPagination] = useState({});
  const [topic] = useContext(TopicToSearch);
  const [results, setResults ] = useState([]);


  useEffect(() => {
    getSearch(topic).then(({data, pagination}) => {
      setResults(data);
      setPagination(pagination)
    })
  },[topic]);

  return(
    <div>
      <div className="border border-t border-0 border-medium-gray w-[157px] mb-[43px] m-auto"></div>
      <h1 className="capitalize text-purple font-montserrat font-bold text-lg text-center mb-[38px] dark:text-white">{topic}</h1>
      <div>
        <div className="grid grid-cols-2 gap-4  lg:grid-cols-3 xl:grid-cols-4">
          {results.map((result => <GifoCard key={result.id} gif={result} sizes={"sm:h-[120px] sm:w-[158px] lg:h-[200px] lg:w-[260px] xl:h-[200px] xl:w-[260px]"} />))}
        </div>
        <div className="flex justify-center mt-[78px] mb-[35px]">
          <button className="border border-purple border-1 rounded-3xl h-[50px] w-[127px] font-montserrat font-bold text-purple text-xs hover:bg-purple hover:text-white dark:border-white dark:text-white dark:hover:bg-white hover:text-black dark:hover:border-white ">VER MAS</button>
        </div>
      </div>
    </div>
  )
}

export default ResultsContainer;