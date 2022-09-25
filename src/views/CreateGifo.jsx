import React, { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import camaraIcon from "../assets/imgs/element-camara.svg"
import tape1Dark from "../assets/imgs/element_cinta1-modo-noc.svg"
import tape1 from "../assets/imgs/element_cinta1.svg"
import tape2Dark from "../assets/imgs/element_cinta2-modo-noc.svg"
import tape2 from "../assets/imgs/element_cinta2.svg"
import ligth from "../assets/imgs/element-luz-camara.svg"
import movie from "../assets/imgs/pelicula.svg"
import movieDark from "../assets/imgs/pelicula-modo-noc.svg"
import { useState } from "react";



const stepOne = () => {
  console.log('holis en paso 1');

  return (
    <div>
      <div className="text-lg font-montserrat font-bold text-purple dark:text-cian">
        <p>Nos das acceso </p>
        <p>a tu camara?</p>
      </div>

      <div className="text-[16px] font-roboto font-semibold dark:text-white">
        <p>El acceso a tu camara sera valido solo</p>
        <p>por el tiempo en el que estes creando el GIFO</p>
      </div>
    </div>
  )
};

const stepTwo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const videoRef = useRef();
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {

    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        height: 480
      }
    }).then(stream => {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }).catch(console.error);
  }, [])

  return (
    <div>
      <video id="video-recorder" ref={videoRef}></video>
    </div>
  )
};

const stepThree = () => {
  console.log('holis en paso 3')
};

function CreateGifo() {
  const steps = [stepOne, stepTwo, stepThree]
  const [theme] = useContext(ThemeContext);
  const [step, setStep] = useState(0);

  const getStreamAndReacord = async () => {



    
  }












  return (
    <div className="w-screen bg-white dark:bg-dark-gray flex flex-col justify-center pt-6">

      {/* Grid box START */}
      <div className="grid w-screen place-content-center grid-cols-[200px_688px_200px]">

        <div className="relative flex items-center mt-[150px] h-[162px] w-[123px]">

          <div className="absolute bottom-[110px] flex">
            <img className="mt-[15px] w-[46px] h-[46px] animate-spin" src={theme === 'dark' ? tape1Dark : tape1} alt="" />
            <img className="mb-[15px] w-[63px] h-[63px] animate-spin" src={theme === 'dark' ? tape2Dark : tape2} alt="" />
          </div>

          <img src={camaraIcon} alt="Camara" />

          <div className="absolute right-[-95px] top-[-11px] h-[151px] w-[91px] animate-pulse">
            <img src={ligth} alt="" />
          </div>
        </div>

        <div className="grid place-content-center border border-purple dark:border-cian h-[390px] w-[688px] p-[20px]">
          <div className="grid grid-rows-[27px_292px_27px]">

            <div className="grid grid-cols-[1fr_594px_1fr]">
              <div className="border-cian border-t-2 border-l-2 h-[24px] w-[24px] dark:border-white"></div>
              <div></div>
              <div className="justify-self-end border-cian border-t-2 border-r-2 h-[25px] w-[27px] dark:border-white"></div>
            </div>

            <div className="w-[592px] h-[292px] grid place-content-center mx-auto text-center">
              <div className="text-lg font-montserrat font-bold text-purple dark:text-cian">
                <p>Aqui podrás</p>
                <p>crear tus propios <span className="text-cian dark:text-white">GIFOS</span></p>
              </div>

              <div className="text-[16px] font-roboto font-semibold dark:text-white">
                <p>Crea tu GIFO en solo 3 pasos!</p>
                <p>(solo necesitas una camara para grabar un video)</p>
              </div>
              {/* {
                steps[step]
              } */}
            </div>

            <div className="grid grid-cols-[1fr_594px_1fr]">
              <div className="border-cian border-b-2 border-l-2 h-[24px] w-[24px] dark:border-white"></div>
              <div></div>
              <div className="justify-self-end border-cian border-b-2 border-r-2 h-[25px] w-[27px] dark:border-white"></div>
            </div>
          </div>
        </div>

        <div className="flex mt-[375px] mr-10px] justify-end align-end">
          <img className="h-[88px] w-[142px]" src={theme === 'dark' ? movieDark : movie} alt="" />
        </div>

      </div>

      {/* Grid box END*/}

      <div className="mx-auto mt-[-44px]">
        <div className="flex gap-8">
          <button onClick={() => setStep(0)} className="border border-1 font-bold rounded-full h-[32px] w-[32px] border-purple text-purple font-roboto text-[18px] text-center hover:bg-purple hover:text-white active:bg-purple active:text-white    dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black ">1</button>
          <button onClick={() => setStep(1)} className="border border-1 font-bold rounded-full h-[32px] w-[32px] border-purple text-purple font-roboto text-[18px] text-center hover:bg-purple hover:text-white active:bg-purple active:text-white    dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black ">2</button>
          <button onClick={() => setStep(2)} className="border border-1 font-bold rounded-full h-[32px] w-[32px] border-purple text-purple font-roboto text-[18px] text-center hover:bg-purple hover:text-white active:bg-purple active:text-white    dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black ">3</button>
        </div>
      </div>

      <div className="mx-auto mt-[25px] w-[796px] border-b border-4 text-purple dark:text-cian "></div>

      <button className="mx-auto my-[24px] border rounded-3xl w-[127px] h-[50px] border-1 font-montserrat font-bold text-xs text-purple hover:bg-purple hover:text-white active:bg-purple active:text-white    dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black">COMENZAR</button>
    </div>


  )
}

export default CreateGifo;