import React, { useRef, useEffect, useState, useContext } from "react";
import RecordRTC from 'recordrtc';
import RecordContext from "../../contexts/recordContext";


function StepTwo() {

  const { setRecord, isRecording } = useContext(RecordContext);
  const [stream, setStream] = useState(null);
  // const [blob, setBlob] = useState(null);
  const videoRef = useRef();
  const [error, setError] = useState(null);

  // const handlerStop = () => {
  //   recordRef.current.stopRecording(() => {
  //     setBlob(recordRef.current.getBlob());
  //   });
  // }

  // const handlerSave = () => {
  //   invokeSaveAsDialog(blob);
  // }

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 480,
        height: 320,
        frameRate: 30,
      },
      audio: false,
    }).then(mediaStream => {
      setRecord(new RecordRTC(mediaStream, { type: 'gif' }));

      // recordRef.current.startRecording();
      setStream(mediaStream);
    }).catch(setError);
  }, [setRecord]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.srcObject = stream;
  }, [stream, videoRef]);


  // useEffect(() => {
  //   if (!isRecording) {
  //   }
  // }, [isRecording]);

  if (error) {
    console.log("Error recording", error);
    return <p>Error cargando camara</p>
  }

  return (
    <div>
      <video autoPlay={true} className="h-[320px] w-[480px]" id="video-recorder" ref={videoRef}>Video no soportado en este navegador</video>
    </div>
  )
}

export default StepTwo;
