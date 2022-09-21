import React, { useState, useEffect, useCallback } from "react";
import FavoriteGifos from "../contexts/FavoritesContext";


// NECESITO GUADAR UN ARRAY DE OBJETOS NO PROCESABLES. 

const FavoruritesProvider = ({children}) => {

  // favourited gifos state used as context
  const [gifos, setGifos] = useState(JSON.parse(localStorage.getItem('favourites') || '[]'));
  
  const isInFavs = useCallback((gifId) => gifos.findIndex(gif => gif.id === gifId), [gifos]);

  // update the localstorage everytime, gifos is updated
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(gifos));    
  }, [gifos]);

  /**
   * Add a new gif to the array and set the localstorage
   * @param {object} gif 
   * @returns array
   */
  const addGifo = (gif) => setGifos([...gifos, gif]);

  /**
   * Remove the indicate gif by id
   * @param {number} gifId 
   */
  const removeGifo = (gifId) => {
    const filtered = gifos.filter(item => item.id !== gifId);
    setGifos(filtered);
  };

  /**
   * Function to validate if add o remove a gif 
   * @param {object} gif 
   */
  const setFavoriteGifo = (gif) => {
    const index = isInFavs(gif.id);

    if(index >= 0) {
      removeGifo(gif.id)
    } else {
      addGifo(gif);
    }
  }

  return(
    <FavoriteGifos.Provider value={{     
      gifos,
      setGifos,
      setFavoriteGifo,
      isInFavs
    }}
    >
      {children}
    </FavoriteGifos.Provider>
  )

}

export default FavoruritesProvider;