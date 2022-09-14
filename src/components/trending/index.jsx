import React, { useEffect, useState, useContext } from "react";
import TopicToSearch from "../../contexts/SearchContext";
import {getTrends} from '../../services/giphi'
import capitalizeFirstLetter from '../../utilities/capitalLetter'

function Trending() {

  const [topic, setTopic] = useContext(TopicToSearch);
  console.log(topic)
  const [trending, setTrending] = useState([]);

  const handlerOnClick = (item) => {
    setTopic(item);
  }

  useEffect( () => {

    getTrends().then(({data}) => {
      setTrending(data.slice(0, 5))
    })
  }, [])

  
  return (
    <div className="text-center mx-6" >
      <h1 className="text-center font-montserrat text-md font-bold text-purple dark:text-white">Trending:</h1>
      <ul className="flex flex-wrap justify-center mb-6 ">
        {trending.map(item => <li key={item}><p onClick={() => {handlerOnClick(item)}} className="font-montserrat font-medium text-xs text-purple tracking-tighter leading-4 mx-2 dark:text-white" >{capitalizeFirstLetter(item)},</p></li>)}
      </ul>
    </div>
  )
}

export default Trending; 