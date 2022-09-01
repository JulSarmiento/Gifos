import { useState } from "react"; // import state
import { Link } from "react-router-dom";

// import hamburguerCLose from '../../assets/'
import logo from '../../assets/imgs/logo-desktop.svg'
import './index.css'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-around border-b border-gray-400 py-8">
      <Link to={'/'}>
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600">-</span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600">-</span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600">-</span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <img src="../../" alt="" />
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/">Modo Nocturno</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to='/Favourites'>Favoritos</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to='/MyGIfos'>Mis Gifos</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to='/CreateGifo'>Crear Gifo</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-6 lg:flex">
          <li>
            <Link to="/" className="text-purple text-sm font-montserrat text-montserrat tracking-tight uppercase hover:underline underline-offset-8 decoration-2 decoration-cian ">Modo Nocturno</Link>
          </li>
          <li>
            <Link to="/Favourites" className="text-purple text-sm font-montserrat tracking-tight uppercase hover:underline underline-offset-8 decoration-2 decoration-cian">Favoritos</Link>
          </li>
          <li>
            <Link to="/MyGifos" className="text-purple text-sm font-montserrat tracking-tight uppercase hover:underline underline-offset-8 decoration-2 decoration-cian">Mis Gifos</Link>
          </li>
          <li className=" ">
            <Link to="/CreateGifo" className=" border-2 border-purple rounded-full grid h-14 w-14 place-content-center hover:bg-purple "><p className="text-xl text-purple hover:text-white">+</p></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}