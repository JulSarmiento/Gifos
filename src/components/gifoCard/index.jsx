import React, { useContext, useState, useEffect} from "react"
import { saveAs } from "file-saver";
import GifoModal from "../gifoModal";
import FavoriteGifos from "../../contexts/FavoritesContext";
import activeFav from "../../assets/imgs/icon-fav-active.svg"
import hoverFav from "../../assets/imgs/icon-fav-hover.svg"

function GifoCard({ gif, sizes }) {

  const {setFavoriteGifo, isInFavs} = useContext(FavoriteGifos);
  const [fav, setFav] = useState(hoverFav);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    if(isInFavs(gif.id) < 0){
      setFav(hoverFav)
      
    } else {
      setFav(activeFav)
    }
  }, [isInFavs, gif])

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

      <div className="absolute  top-0 left-0 w-full h-0 flex flex-row justify-between text-left items-start  bg-clear-purple opacity-0 lg:group-hover:h-full lg:group-hover:opacity-100 duration-500">
        <div className="self-end ml-[10px] pb-2 ">
          <p className="text-white grid font-roboto font-regular text-[15px] capitalize" >{gif.username}</p>
          <p className="font-roboto font-bold text-[16px] text-white capitalize w-[243px]">{gif.title}</p>
        </div>
        <div className="flex gap-2 pt-2 pr-2 ml-[-200px] z-10">
          <button onClick={() => setFavoriteGifo(gif)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" >
            <img src={fav} alt="active favorite"/>
          </button>
          <button id="downloadBtn" download onClick={() => download(gif.images?.downsized?.url, gif.title)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" ><span className="material-symbols-outlined">file_download</span></button>
          <button onClick={() => setShowModal(true)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" ><span className="material-symbols-outlined">open_in_full</span></button>
        </div>
      </div>

      {showModal ? 
        <GifoModal gif={gif} onClose={() => setShowModal(false)} /> 
      : 
        ''
      }
    </div>
  )
}


export default GifoCard;

