import React, { useRef, useState } from "react";
import RecordContext from "../contexts/recordContext";

const RecordProvider = ({ children }) => {
  const record = useRef();

  const [isRecording, setIsRecording] = useState(true);

  const startRecord = () => {
    setIsRecording(true);
    record.current.startRecording();
    console.log("Comenzando a grabar");
  };

  const stopRecord = () => {
    setIsRecording(false);
    record.current.stopRecording(() => {
      console.log("Terminada la grabacion", record.current.getBlob());
      // setBlob(record.current.getBlob());
    });
    console.log("finalizar grabacion.");
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
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};

export default RecordProvider;
