import React, {useRef, useEffect, useState} from "react";
import RecordRTC, { invokeSaveAsDialog } from 'recordrtc';


function StepTwo () {

  const [stream, setStream] = useState(null);
  const [blob, setBlob] = useState(null);
  const videoRef = useRef();
  const recordRef = useRef();

  const handlerRecording = async () => {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia({
      audio: false,
      video: {
        width: 480
      }
    });

    setStream(mediaStream);
    recordRef.current = new RecordRTC(mediaStream, {type : 'gif'});
    recordRef.current.startRecording();
  }

  const handlerStop = () => {
    recordRef.current.stopRecording(() => {
      setBlob(recordRef.current.getBlob());
    });
  }

  const handlerSave = () => {
    invokeSaveAsDialog(blob);
  }

  useEffect(() => {
    if(!videoRef.current) {
      return
    }
  }, [stream, videoRef]);

  return (
    <div>
      <video className="h-[320px] w-[480px]" id="video-recorder" ref={videoRef} >Holis</video>
    </div>
  )
}

export default StepTwo;
