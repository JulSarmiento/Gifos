import React, { useContext,  useState, Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Chronomether from "../components/chronometer";

import camaraIcon from "../assets/imgs/element-camara.svg"
import tape1Dark from "../assets/imgs/element_cinta1-modo-noc.svg"
import tape1 from "../assets/imgs/element_cinta1.svg"
import tape2Dark from "../assets/imgs/element_cinta2-modo-noc.svg"
import tape2 from "../assets/imgs/element_cinta2.svg"
import ligth from "../assets/imgs/element-luz-camara.svg"
import movie from "../assets/imgs/pelicula.svg"
import movieDark from "../assets/imgs/pelicula-modo-noc.svg"
import StepOne from "../components/steps/stepOne";
import StepTwo from "../components/steps/stepTwo";
import StepThree from "../components/steps/StepThree";
import StepCero from "../components/steps/stepCero";

const mapper = {
  "0" : "COMENZAR",
  "1" : "",
  "2" : "GRABAR",
  "3" : "FINALIZAR",
  "4" : "SUBIR GIFO",
  "5" : ""
}


function CreateGifo() {
  const dataStarted = new Date().getTime()
  const [theme] = useContext(ThemeContext);
  const [btn, setBtn] = useState(0);
  const [step, setStep] = useState(0);
  const steps = [<StepCero setStep={setStep}/> ,<StepOne/>, <StepTwo/>, <StepThree/>]
  // const buttons = [<StartBtn/>, '' ,  <RecordBtn/>, <FinishBtn/>, <UploadBtn/>];



  console.log(btn)

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
              { steps[step] }
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

      <div className="flex justify-between w-[680px] mx-auto mt-[-44px]">
        <div className="w-[150px]"></div>
        <div className="flex gap-8">
          <button onClick={() => {
            setStep(1);
            setBtn(1);
            }} className="border border-1 font-bold rounded-full h-[32px] w-[32px] border-purple text-purple font-roboto text-[18px] text-center hover:bg-purple hover:text-white active:bg-purple active:text-white    dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black ">1</button>
          <button onClick={() => {
            setStep(2);
            setBtn(2);
            }} className="border border-1 font-bold rounded-full h-[32px] w-[32px] border-purple text-purple font-roboto text-[18px] text-center hover:bg-purple hover:text-white active:bg-purple active:text-white    dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black ">2</button>
          <button onClick={() => {
            setStep(3);
            setBtn(3);
          }} className="border border-1 font-bold rounded-full h-[32px] w-[32px] border-purple text-purple font-roboto text-[18px] text-center hover:bg-purple hover:text-white active:bg-purple active:text-white    dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black ">3</button>
        </div>

        {

          btn === 1 || btn === 0 ?
            <div className="w-[150px]"/>
          :

            btn === 2 ?
              <Chronomether secs={(new Date().getTime() - dataStarted) / 1000}/>
            :
              
              btn === 3 ?

              <p className="text-purple text-[15px] font-montserrat font-bold tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian dark:text-white">Repetir captura</p> 
              :
              ''
        }
      </div>

      <div className="mx-auto mt-[25px] w-[796px] border-b border-4 text-purple dark:text-cian "></div>



      {
        btn === 1 ?
        ''
        :
        <button
          onClick={() => setStep(1)}
          className="mx-auto my-[24px] border rounded-3xl w-[127px] h-[50px] border-1 font-montserrat font-bold text-xs text-purple hover:bg-purple hover:text-white active:bg-purple active:text-white    dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black"
        >
          {mapper[step]}
        </button>
      }

    </div>

  )
}

export default CreateGifo;