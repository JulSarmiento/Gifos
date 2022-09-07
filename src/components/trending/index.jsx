import React, { useEffect, useState } from "react";
import {getTrends} from '../../services/giphi'
import capitalizeFirstLetter from '../../utilities/capitalLetter'

function Trending() {

  const [trending, setTrending] = useState([]);

  useEffect( () => {

    getTrends().then(({data}) => {
      setTrending(data.slice(0, 5))
    })
  }, [])

  return (
    <div className="text-center" >
      <h1 className="text-center font-montserrat text-md font-bold text-purple dark:text-white">Trending:</h1>
      <ul className="flex flex-wrap justify-center mb-6 ">
        {trending.map(item => <li key={item}><a className="font-montserrat font-medium text-xs text-purple tracking-tighter leading-4 mx-2 dark:text-white" href="/">{capitalizeFirstLetter(item)},</a></li>)}
      </ul>
      {/* <span className="text-medium-gray dark:text-white">_______________________</span> */}
    </div>
  )
}

export default Trending; 