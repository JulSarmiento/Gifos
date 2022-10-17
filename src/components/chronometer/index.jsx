import React, { useContext, useEffect, useState } from "react";
import RecordContext from "../../contexts/recordContext";

function Chronomether() {
  const { isRecording } = useContext(RecordContext);
  const [secs, setSecs] = useState(0);

  let hr = Math.floor(secs / 3600);
  let min = Math.floor((secs - hr * 3600) / 60);
  let sec = Math.floor(secs - hr * 3600 - min * 60);

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  useEffect(() => {
    let timer;

    if (isRecording) {
      timer = setTimeout(() => {
        setSecs(secs + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    }
  }, [secs, isRecording]);

  return (
    <p className="w-[150px] text-end text-purple text-[15px] font-montserrat font-bold tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian dark:text-white">
      {`${hr} : ${min} : ${sec}`}
    </p>
  )
}

export default Chronomether;