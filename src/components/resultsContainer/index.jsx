import React, { useContext, useEffect } from "react";
import { useState } from "react";
import TopicToSearch from "../../contexts/SearchContext";
import { getSearch } from "../../services/giphi";
import GifoCard from "../gifoCard";
import noResultImg from "../../assets/imgs/icon-busqueda-sin-resultado.svg"
import Pagination from "../pagination";
// pendiente paginacion porque no tengo idea de que hacer ahi

function ResultsContainer() {

  const [pagination, setPagination] = useState({});
  const [topic] = useContext(TopicToSearch);
  const [results, setResults ] = useState([]);
  let [offset, setOffset] = useState(12);

  const onClick = (chilData) =>  {   

    setOffset(offset);
    getSearch(topic, offset *= chilData).then(({data, pagination}) => {
      setResults(data);
      setPagination(pagination);
    })
  }

  console.log(pagination)

  useEffect(() => {
    getSearch(topic).then(({data, pagination}) => {
      setResults(data);
      setPagination(pagination);
      setOffset(12)
    })
  },[topic]);

  return(
    <div>
      {
        topic === '' ?
          ''
          :
          results.length === 0 ?
            <div className="border border-t border-0 border-medium-gray text-center flex flex-col justify-center mb-[84px] ">
              <h1 className="font-montserrat font-bold text-purple text-md lg:text-lg dark:text-white mb-[109px] mt-[84px]">{topic}</h1>
              <img src={noResultImg} className="h-[150px] w-[150px] mx-auto mb-[20px]" alt="No hay resultados para tu busqueda" />
              <p className="font-montserrat font-bold text-cian text-sm lg:text-md">Intenta con otra busqueda</p>
            </div>
            :
            <div>
              <div>
                <div className="border border-t border-0 border-medium-gray w-[157px] mb-[43px] m-auto"></div>
                <h1 className=" capitalize text-purple font-montserrat font-bold text-lg text-center mb-[38px] dark:text-white">{topic}</h1>
                <div>
                  <div className="grid grid-cols-2 gap-4  lg:grid-cols-3 xl:grid-cols-4">
                    {topic === '' ? 
                      '':
                      results.map((result => <GifoCard key={result.id} gif={result} sizes={"sm:h-[120px] sm:w-[158px] lg:h-[200px] lg:w-[260px] xl:h-[200px] xl:w-[260px] bg-loading"} />))
                    }
                  </div>
                  {/* paginacion */}
                  <div className="mt-[24px]">
                    <Pagination onAddNumber={onClick}/>
                  </div>
                </div>
              </div>
            </div>

      }
    </div>
  )
}

export default ResultsContainer;