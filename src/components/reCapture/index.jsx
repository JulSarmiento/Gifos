import React from "react"; 

export default function ReCapture({onClick}) {

  return (
    <p onClick={onClick} className="text-purple text-[15px] font-montserrat font-bold tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian dark:text-white">
      Repetir captura
    </p>
  )
}