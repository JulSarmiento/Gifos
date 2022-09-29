import React, {useRef, useEffect} from "react";

function StepTwo () {

  const videoRef = useRef();
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {

    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: 480
      }
    }).then(stream => {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }).catch(console.error);
  }, [])

  return (
    <div>
      <video className="h-[320px] w-[480px]" id="video-recorder" ref={videoRef} >Holis</video>
    </div>
  )
}

export default StepTwo;