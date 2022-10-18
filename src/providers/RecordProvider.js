import React, { useRef, useState, useCallback, useEffect } from "react";
import RecordContext from "../contexts/recordContext";
import { postGifo } from "../services/giphi";

const RecordProvider = ({ children }) => {
  const record = useRef();
  const [isRecording, setIsRecording] = useState(true);
  const [blob, setblob] = useState(null);
  const [myGifs, setMyGifs] = useState(JSON.parse(localStorage.getItem('myGifs') || '[]'));

  // PAGINA DE MIS GIFOS
  const isInMyGifos = useCallback((gifId) => myGifs.findIndex(gif => gif.id === gifId), [myGifs]);

  useEffect(() => {
    localStorage.setItem('myGifs', JSON.stringify(myGifs))
  },[myGifs]);

  const addGif = (gif) => setMyGifs([...myGifs, gif]);

  const removeGif = (gifId) => {
    const filtered = myGifs.filter(item => item.id !== gifId);
    setMyGifs(filtered);
  };

  const setMyGifsInArray = (gif) => {
    const index = isInMyGifos(gif.id);

    if(index >= 0) {
      removeGif(gif.id)
    } else {
      addGif(gif);
    }
  }
  
  // FIN DE PAGINA DE MIS GIFOS

  const gifo = useRef({ link: null });

  const startRecord = () => {
    setIsRecording(true);
    record.current.startRecording();
    console.log("Comenzando a grabar");
  };

  const stopRecord = () => {
    setIsRecording(false);
    record.current.stopRecording(() => {
      setblob(record.current.getBlob());
      console.log("finalizar grabacion.");
    });
  };

  const saveRecord = () => {
    let form = new FormData();
    form.append("file", blob, "myGif.gif");
    console.log("gifo guardado", form.get("file"));

    return postGifo(form);
  };

  const setRecord = (instance) => {
    record.current = instance;
  };

  return (
    <RecordContext.Provider
      value={{
        isRecording,
        setRecord,
        startRecord,
        stopRecord,
        saveRecord,
        gifo,
        setMyGifsInArray,
        isInMyGifos
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};

export default RecordProvider;
