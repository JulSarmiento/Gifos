import React, { useState, useEffect } from "react"
import { randomGifo } from "../../services/giphi";

export default function GifoCard() {
  const [gifo, setGifo] = useState();

  useEffect(() => {
    randomGifo().then(({data}) => {
      setGifo(data);
    })
  }, []);

  if (!gifo) {
    return "No hay una monda"
  }

  return ( 
    <div class="group relative h=[187px] w-[243px] lg:h-[275px] lg:w-[357px]">
      <img class="h=[187px] w-[243px] lg:h-[275px] lg:w-[357px] object-cover" src={gifo.images.downsized.url} alt='/' />
      <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-clear-purple opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
        <h1 class="text-2xl text-white">Fiction T-Shirt Store</h1>
        <p class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" >Continue Shopping</p>
      </div>
    </div>
  )
}




