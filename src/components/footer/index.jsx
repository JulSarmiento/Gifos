import React from "react";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <footer className="h-48 border-b-4 border-purple lg:flex justify-center items-center dark:bg-dark-gray dark:border-black">

      <div className="flex flex-col items-center w-full mx-0 text-sm lg:flex-row justify-between lg:mx-32 items-center">

        <div className="lg:flex gap-8">        
          <p className="font-roboto text-black text-md font-medium mb-6 text-center lg:mb-0 dark:text-white">Compartir en: </p>
          <div className="flex justify-around mb-12 lg:gap-4 mb-0 ">
            <a className="text-medium-gray hover:text-purple dark:text-white dark:border-white hover:dark:text-white" href="https://www.facebook.com/JulhSarmiento" target="_blank" rel="noreferrer">
              <FacebookIcon/>
            </a>          
            <a className="text-medium-gray hover:text-purple dark:text-white dark:border-white  hover:dark:text-light-white" href="https://instagram.com/studycorndev?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" >
              <InstagramIcon/>
            </a>
            <a className="text-medium-gray hover:text-purple dark:text-white dark:border-white  hover:dark:text-light-white" href="https://twitter.com/Jasa1999" target="_blank" rel="noreferrer">
              <TwitterIcon/>
            </a>
          </div>

        </div>

        <p className="text-black text-xs mt-16 lg:mt-0 dark:text-white">© Gifos 2020 All Rights Reserved</p>
      </div>
      
    </footer>
  )
}

