import React, { useState, useEffect } from "react";
import FavoriteGifos from "../contexts/FavoritesContext";

// NECESITO GUADAR UN ARRAY DE OBJETOS NO PROCESABLES. 

const FavoruritesProvider = ({children}) => {

  // favourited gifos state used as context
  const [gifos, setGifos] = useState(JSON.parse(localStorage.getItem('favourites') || '[]'));

  console.log('gifos provider type' ,gifos)

  // update the localstorage everytime, gifos is updated
  useEffect(() => {
		localStorage.setItem("favourites", JSON.stringify(gifos));
	}, [gifos]);

  return(
    <FavoriteGifos.Provider value={[
      gifos,
      setGifos,

    ]}
    >
      {children}
    </FavoriteGifos.Provider>
  )

}

export default FavoruritesProvider;