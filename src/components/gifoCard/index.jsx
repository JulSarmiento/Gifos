import React, { useContext, useEffect, useState, useCallback} from "react"
import { saveAs } from "file-saver";
import GifoModal from "../gifoModal";
import FavoriteGifos from "../../contexts/FavoritesContext";

import activeFav from "../../assets/imgs/icon-fav-active.svg"
import hoverFav from "../../assets/imgs/icon-fav-hover.svg"


function GifoCard({ gif, sizes }) {

  const [gifos, setGifos] = useContext(FavoriteGifos);
  const [fav, setFav] = useState(hoverFav);
  const [showModal, setShowModal] = useState(false);

  /**
   * This function validate if the gif to be added as favourite exist or dont.
   * @param {number} gifId 
   * @returns and ID
   */
  const ifExist = useCallback((gifId) => gifos.findIndex(gifo => gifo.id === gifId), [gifos]);

  useEffect(() => {

    if(ifExist(gif.id) < 0){
      setFav(hoverFav)
      
    } else {
      setFav(activeFav)
    }
  }, [gif, ifExist])


  /**
   * This function delete the gif sended and set the new array to the localstorage
   * @param {number} gifId 
   */
  const removeGif = (gifId) => {
    const filtered = gifos.filter(item => item.id !== gifId);
    setGifos(filtered);
    // setFavourite(false)

  }

  /**
   * This function add a new object to the favourites array and update the localstorage
   * @param {object} gif 
   */
  const addFavourite = (gif) => {
    setGifos([...gifos, gif]);
    
  }

  /**
   * This function validate and decide if save a new gif o remove it
   * @param {object} gif 
   */
  const setFavoriteGifo = (gif) => {
    const index = ifExist(gif.id)

    if (index < 0) {
      addFavourite(gif);
    } else {
      removeGif(gif.id)
    }


  }

  /**
   * This function allows to download the selected gif
   * @param {string} img 
   * @param {string} title 
   */
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
          <button onClick={() => setFavoriteGifo(gif)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" >
            <img src={fav} alt="active favorite"/>
          </button>
          <button id="downloadBtn" download onClick={() => download(gif.images?.downsized?.url, gif.title)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" ><span class="material-symbols-outlined">file_download</span></button>
          <button onClick={() => setShowModal(true)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" ><span class="material-symbols-outlined">open_in_full</span></button>
        </div>
      </div>

      {showModal ? <GifoModal gif={gif} onClose={() => setShowModal(false)} /> : ''}
    </div>
  )
}


export default GifoCard;