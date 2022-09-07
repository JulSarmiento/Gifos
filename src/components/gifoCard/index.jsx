import React, { useState, useEffect } from "react"
import { saveAs } from "file-saver";
import { randomGifo } from "../../services/giphi";
import GifoModal from "../gifoModal";



export default function GifoCard() {
  const [showModal, setShowModal] = useState(false);
  const [isloading, setIsLoading] = useState(false)
  const [gifo, setGifo] = useState({});

  const download = (img, title) => {
    saveAs(
      `${img}.gif`, title
    );

  }

  // provicional
  useEffect(() => {
    setIsLoading(true)
    randomGifo().then(({ data }) => {
      setGifo(data);
      setIsLoading(false)
    })
  }, []);
  console.log(gifo)

  if (isloading) {
    return <div className='loading'><img src="https://i.pinimg.com/originals/2c/bb/5e/2cbb5e95b97aa2b496f6eaec84b9240d.gif" alt="loading" /></div>
  }

   return (
    <div class="group relative h=[187px] w-[243px] lg:h-[275px] lg:w-[357px]">
      <img onClick={() => setShowModal(true)} className="object-cover h=[187px] w-[243px] lg:h-[275px] lg:w-[357px] object-cover" src={gifo.images?.downsized?.url} alt={gifo.title} />
      <div class="lg:absolute  top-0 left-0 w-full h-0 flex flex-row justify-between  items-start bg-clear-purple opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
        <div className="self-end ml-[18.5px] mb-[51px]">
          <p className="text-white grid font-roboto font-regular text-sm capitalize" >{gifo.username}</p>
          <p className="font-roboto font-bold text-md text-white capitalize">{gifo.title}</p>
        </div>
        <div className="flex gap-2 pt-2 pr-2">
          <button className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" ><span class="material-symbols-outlined">favorite</span></button>
          <button id="downloadBtn" download onClick={() => download(gifo.images?.downsized?.url, gifo.title)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" ><span class="material-symbols-outlined">file_download</span></button>
          <button onClick={() => setShowModal(true)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" ><span class="material-symbols-outlined">open_in_full</span></button>
        </div>
      </div>
      {showModal? <GifoModal gif={gifo} onClose={() => setShowModal(false)}/> : ''}
    </div>
  )
}




