import React from "react";
import check from "../../assets/imgs/check.svg"
import {invokeSaveAsDialog} from "recordrtc"

// No se si me toque hacer una peticion para buscar el gifo y posteriormente consguir el url y descargarlo.
function StepFour ({img, title}) {

  async function downloadGif(gifImg, gifName) {
    let blob = await fetch(gifImg).then((img) => img.blob());
    invokeSaveAsDialog(blob, gifName + ".gif");
  }

  return (
    <div className="z-1000">
      <div className="h-[320px] w-[480px] bg-clear-purple relative">

        <div className="absolute left-[394px] right-[12px] top-[12px]">
          <div className="flex gap-2">
            <button onClick={() => downloadGif(img, title)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" >
              <span className="material-symbols-outlined">
                download
              </span>
            </button>
            <button className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" >
              <span className="material-symbols-outlined">
                link  
              </span>
            </button>
          </div> 
        </div>
        
        <div className="absolute left-[123px] top-[127px]">
          <div className="flex items-center justify-center flex-col">
            <img className="h-[13px] w=[18px] mb-[14px]" src={check} alt="loading" />
            <p className="font-montserrat text-[15px] text-white w-[234px]">GIFO subido con exito.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StepFour;