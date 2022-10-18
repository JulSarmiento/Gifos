import React, { useContext } from "react";
import { invokeSaveAsDialog } from "recordrtc"
import check from "../../assets/imgs/check.svg"
import RecordContext from "../../contexts/recordContext";


function StepFour() {
  const { gifo } = useContext(RecordContext);
  const { link } = gifo.current;

  async function downloadGif() {
    const blob = await fetch(link).then((img) => img.blob());
    console.log("Blob is", blob);
    invokeSaveAsDialog(blob, `${blob.type}.gif`);
  }

  return (
    <div className="z-1000">
      <div className="h-[320px] w-[480px] bg-clear-purple relative">

        <div className="absolute left-[394px] right-[12px] top-[12px]">
          <div className="flex gap-2">
            <button onClick={() => downloadGif()} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" >
              <span className="material-symbols-outlined">
                download
              </span>
            </button>
            <button onClick={() => navigator.clipboard.writeText(link)} className="bg-clear-gray grid place-content-center h-[32px] w-[32px] rounded-[6px] hover:bg-light-gray" title={link} >
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