import React from "react";
import { saveAs } from "file-saver";


export default function GifoModal({onClose, gif}) {

  const download = (img, title) => {
    saveAs(
      `${img}.gif`, title
    );

  }

  return (

    <div >
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto sm:w-full lg:w-9/12">
          {/*content*/}
          <div className="rounded-lg sm:h-[548px] lg:h-auto lg:py-4 shadow-lg relative flex flex-col w-full bg-white dark:bg-dark-gray outline-none focus:outline-none">
            {/*header*/}
            <div className="flex  p-5 rounded-t">
              <button className="p-1 ml-auto bg-transparent float-right leading-none font-semibold outline-none focus:outline-none" onClick={onClose}>
                <span className="material-symbols-outlined bg-transparent text-purple h-6 w-6 text-xl block outline-none focus:outline-none dark:text-cian dark:hover:"> close </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative m-auto h-auto flex flex-col">
              <img className="sm:h-[245px] sm:w-[316px] lg:h-[400px] lg:w-[695px] xl:h-[500px] xl:w-[795px]" src={gif.images?.downsized?.url} alt={gif.title} />
              <div className="flex gap-2 mt-2 items-center justify-between">
                <div className="text-left">
                  <p className="font-roboto text-sm capitalize dark:text-white">{gif.username}</p>
                  <p className="font-montserrat font-bold text-sm capitalize w-[150px] lg:w-[400px] dark:text-white">{gif.title}</p>
                </div>

                <div className="flex justify-between border-purple align-middle gap-4">
                  <button className="grid place-content-center h-[32px] w-[32px] rounded-[6px] text-purple dark:text-cian" ><span className="material-symbols-outlined hover:text-clear-purple ">favorite</span></button>
                  <button className="grid place-content-center h-[32px] w-[32px] rounded-[6px] text-purple border border-purple hover:text-clear-purple hover:border-clear-purple dark:text-cian dark:border-cian" id="downloadBtn" download onClick={() => download(gif.images?.downsized?.url, gif.title)} ><span class="material-symbols-outlined">file_download</span></button>
                </div>
              </div>

            </div>
            {/*footer*/}

          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  )

}
