import React, { useContext, useState } from "react"; // import state
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

// import hamburguerCLose from '../../assets/'
import logo from '../../assets/imgs/logo-desktop.svg'
import logoDark from '../../assets/imgs/logo-desktop-modo-noc.svg'
import './index.css'

export default function Header() {
  
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-between border-t-4 border-purple h-24 px-8 lg:px-28 bg-white dark:bg-dark-gray dark:border-black">
      <Link to={'/'}>
        {theme === 'dark'? <img src={logoDark} alt="logo" className="h-10 lg:20"/> :  <img src={logo} alt="logo" className="h-10 lg:20"/>}
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden ">

          {/* Open Icon */}
          <div
            className="HAMBURGER-ICON absolut top-0 right-0 px-4 py-8"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="material-symbols-outlined text-md text-purple md:text-xl dark:text-white">
              {isNavOpen? 'close' :  'menu'}
            </span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 

          {/* Close Icon */}
            <div
              className="CROSS-ICON absolute  absolut top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
            </div>

            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center bg-clear-purple my-1 w-screen min-h-[1200px] dark:bg-black">
              
              <li className="flex flex-col mt-8 mb-2 uppercase text-white font-montserrat font-bold">
                {theme === 'dark' ? (
                  <p
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="flex flex-col mt-8 mb-2 uppercase text-white font-montserrat font-bold "
                  >                      
                    Modo Diurno
                  </p>
                    ) : (
                  <p
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="flex flex-col mt-8 mb-2 uppercase text-white font-montserrat font-bold"
                  >
                    Modo Nocturno
                  </p>

                    )}
                  <span className="mx-auto border-b pb-4 border-white w-10"> </span>
              </li>
              <li className="flex flex-col mt-8 mb-2 uppercase text-white font-montserrat font-bold">
                <Link to='/Favourites'>Favoritos</Link>
                <span className="mx-auto border-b pb-4 border-white w-10"> </span>
              </li>
              <li className="flex flex-col mt-8 mb-2 uppercase text-white font-montserrat font-bold">
                <Link to='/MyGIfos'>Mis Gifos</Link>
                <span className="mx-auto border-b pb-4 border-white w-10"> </span>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-6 lg:flex align-middle">
          <li className="h-auto grid place-content-center">
            {theme === 'dark' ? (
              <p
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-purple text-sm font-montserrat font-bold text-montserrat tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian dark:text-white"
              >                      
                Modo Diurno
              </p>
                ) : (
              <p
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-purple text-sm font-montserrat font-bold text-montserrat tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian dark:text-white"
              >
                Modo Nocturno
              </p>

                )}
          </li>
          <li className="h-auto grid place-content-center">
            <Link to="/Favourites" className="text-purple text-sm font-montserrat font-bold tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian dark:text-white">Favoritos</Link>
          </li>
          <li className="h-auto grid place-content-center">
            <Link to="/MyGifos" className="text-purple text-sm font-montserrat font-bold tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian dark:text-white">Mis Gifos</Link>
          </li>
          <li className="h-auto grid place-content-center">
            <Link to="/CreateGifo" ><p className=" text-xl grid place-content-center text-purple border-2 border-purple rounded-full h-14 w-14 hover:text-white hover:bg-purple dark:text-white dark:border-white hover:dark:bg-white hover:dark:text-dark-gray"><span className="material-symbols-outlined">add</span></p></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}