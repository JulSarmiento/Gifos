import { useState } from "react"; // import state
import { Link } from "react-router-dom";

// import hamburguerCLose from '../../assets/'
import logo from '../../assets/imgs/logo-desktop.svg'
import './index.css'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-t-4 border-purple h-24 px-8 lg:px-16">
      <Link to={'/'}>
        <img src={logo} alt="logo" className="h-10 lg:20"/>
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden ">

          {/* Open Icon */}
          <div
            className="HAMBURGER-ICON absolut top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span class="material-symbols-outlined text-md text-purple md:text-xl">
              menu
            </span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 

          {/* Close Icon */}
            <div
              className="CROSS-ICON absolute  absolut top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              {/* <span class="material-symbols-outlined text-md text-purple md:text-xl">
                close
              </span> */}

            </div>

            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center bg-clear-purple w-screen min-h-[1200px]">
              <li className="border-b pb-4 border-white my-8 uppercase text-white font-montserrat font-bold ">
                <Link to="/">Modo Nocturno</Link>
              </li>
              <li className="border-b border-white my-8 uppercase">
                <Link to='/Favourites'>Favoritos</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to='/MyGIfos'>Mis Gifos</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-6 lg:flex align-middle">
          <li className="h-auto grid place-content-center">
            <Link to="/" className="text-purple text-sm font-montserrat font-bold text-montserrat tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian ">Modo Nocturno</Link>
          </li>
          <li className="h-auto grid place-content-center">
            <Link to="/Favourites" className="text-purple text-sm font-montserrat font-bold tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian">Favoritos</Link>
          </li>
          <li className="h-auto grid place-content-center">
            <Link to="/MyGifos" className="text-purple text-sm font-montserrat font-bold tracking-normal uppercase hover:underline underline-offset-8 decoration-2 decoration-cian">Mis Gifos</Link>
          </li>
          <li className="h-auto grid place-content-center">
            <Link to="/CreateGifo" ><p className=" text-xl grid place-content-center text-purple border-2 border-purple rounded-full h-14 w-14 hover:text-white hover:bg-purple"><span class="material-symbols-outlined">add</span></p></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}