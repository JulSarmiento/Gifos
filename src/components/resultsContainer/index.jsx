import React, { useContext, useEffect } from "react";
import { useState } from "react";
import TopicToSearch from "../../contexts/SearchContext";
import { getSearch } from "../../services/giphi";
import GifoCard from "../gifoCard";
import noResultImg from "../../assets/imgs/icon-busqueda-sin-resultado.svg"
// pendiente paginacion porque no tengo idea de que hacer ahi

function ResultsContainer() {

  const [pagination, setPagination] = useState({});
  const [topic] = useContext(TopicToSearch);
  const [results, setResults ] = useState([]);
  const [offset, setOffset] = useState(12)
  let   [num, setNum] = useState(1)
  // const [page, setPage] = useState([])


  const printPagination = () => {
    setNum(pagination.total_count / pagination.offset)
  }

  // const getPagination = () => {
    
  // }

  const handlerOnClick = (num) => {
    setOffset(offset + num)
    getSearch(topic, offset).then(({data, pagination}) => {
      setResults(data);
      setPagination(pagination)
    })
    printPagination()
    console.log(offset)
  }

  useEffect(() => {
    getSearch(topic).then(({data, pagination}) => {
      setResults(data);
      setPagination(pagination);
      setOffset(12)
    })
  },[topic]);

  console.log('pagination', pagination)
  console.log('results', results)
  console.log('topic in search box', topic)
  console.log('num', num)

  return(
    <div>
      {
        topic === '' ?
          ''
          :
          results.length === 0 ?
            <di className="border border-t border-0 border-medium-gray text-center flex flex-col justify-center mb-[84px] ">
              <h1 className="font-montserrat font-bold text-purple text-md lg:text-lg dark:text-white mb-[109px] mt-[84px]">{topic}</h1>
              <img src={noResultImg} className="h-[150px] w-[150px] mx-auto mb-[20px]" alt="No hay resultados para tu busqueda" />
              <p className="font-montserrat font-bold text-cian text-sm lg:text-md">Intenta con otra busqueda</p>
            </di>
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
                  <div className="flex justify-center mt-[78px] mb-[35px]">
                    <button onClick={() => handlerOnClick(12)} className="border border-purple border-1 rounded-3xl h-[50px] w-[127px] font-montserrat font-bold text-purple text-xs hover:bg-purple hover:text-white dark:border-white dark:text-white dark:hover:bg-white hover:text-black dark:hover:border-white ">VER MAS</button>
                  </div>
                </div>
              </div>

              {/* paginacion */}
              <div className="flex flex-row flex-wrap">
                
              </div>
            </div>

      }
    </div>
  )
}

export default ResultsContainer;