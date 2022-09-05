import React from "react";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <footer className="h-48 w-screen border-b-4 border-purple lg:flex justify-center items-center">

      <div className="flex flex-col items-center mx-0 text-sm lg:flex-row justify-between lg:mx-32 items-center w-screen">

        <div className="lg:flex gap-8">        
          <p className="font-roboto text-black text-md font-medium mb-6 text-center lg:mb-0">Compartir en: </p>
          <div className="flex justify-around mb-12 lg:gap-4 mb-0 ">
            <a className="text-medium-gray hover:text-purple" href="https://www.facebook.com/JulhSarmiento" target="_blank" rel="noreferrer">
              <FacebookIcon/>
            </a>          
            <a className="text-medium-gray hover:text-purple" href="https://instagram.com/studycorndev?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" >
              <InstagramIcon/>
            </a>
            <a className="text-medium-gray hover:text-purple" href="https://twitter.com/Jasa1999" target="_blank" rel="noreferrer">
              <TwitterIcon/>
            </a>
          </div>

        </div>

        <p className="text-black text-xs mt-16 lg:mt-0">© Gifos 2020 All Rights Reserved</p>
      </div>
      
    </footer>
  )
}

