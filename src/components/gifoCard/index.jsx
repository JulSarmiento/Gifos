import React, { useContext, useState} from "react"
import { saveAs } from "file-saver";
import GifoModal from "../gifoModal";
import FavoriteGifos from "../../contexts/FavoritesContext";


function GifoCard({gif, sizes}) {

  const [gifos, setGifos] = useContext(FavoriteGifos);
  // const [favorite, setFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const ifExist = (gifId) =>  gifos.findIndex(gifo => gifo.id === gifId );

  const removeGif = (gifId) => {
      gifos.splice(gifId, 1);
      setGifos([...gifos, gif])
  }

  // Add gifos to localstorage
  const setFavoriteGifo = (gif) => {
    // setFavorite(true);
    const index = ifExist(gif.id)
    if(index < 0){
      setGifos([...gifos, gif]);
    } else{
      console.log('El gifo ya se guardo. Eliminando', gifos.splice(index, 1))
      removeGif(index)
    }
    
  }

  const download = (img, title) => {
    saveAs(
      `${img}.gif`, title
    );

  }

   return (
    <div className="group relative">

      <div className={sizes}>
        <img onClick={() => setShowModal(true)} className={sizes} src={gif.images?.downsized?.url} alt={gif.title} />
      </div>      

      <div class="absolute  top-0 left-0 w-full h-0 flex flex-row justify-between text-left items-start  bg-clear-purple opacity-0 lg:group-hover:h-full lg:group-hover:opacity-100 duration-500">
        <div className="self-end ml-[18.5px] mb-[51px]">
          <p className="text-white grid font-roboto font-regular text-sm capitalize" >{gif.username}</p>
          <p className="font-roboto font-bold text-md text-white capitalize">{gif.title}</p>
        </div>
        <div className="flex gap-2 pt-2 pr-2">
          <button onClick={() => setFavoriteGifo(gif)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" ><span class="material-symbols-outlined">favorite</span></button>
          <button id="downloadBtn" download onClick={() => download(gif.images?.downsized?.url, gif.title)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" ><span class="material-symbols-outlined">file_download</span></button>
          <button onClick={() => setShowModal(true)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" ><span class="material-symbols-outlined">open_in_full</span></button>
        </div>
      </div>

      {showModal? <GifoModal gif={gif} onClose={() => setShowModal(false)}/> : ''}
    </div>
  )
}


export default GifoCard;