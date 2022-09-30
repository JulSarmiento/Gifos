import React from "react";

function Chronomether ({secs}) {

    let hr = Math.floor(secs / 3600);
    let min = Math.floor((secs - hr * 3600) / 60);
    let sec = Math.floor(secs - hr * 3600 - min * 60);
  
    if (min < 10) {
      min = "0" + min;
    }
  
    if (sec < 10) {
      sec = "0" + sec;
    }

    return (
      <p className="w-[150px] text-end text-purple text-[15px] font-montserrat font-bold tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian dark:text-white">
        {`${hr} : ${min} : ${sec}`}
      </p>
    )
  
  
  
}

export default Chronomether;