import { useState } from "react"; // import state
import { Link } from "react-router-dom";

// import hamburguerCLose from '../../assets/'
import createGifoLogo from '../../assets/imgs/button-crear-gifo.svg'
import './index.css'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-around border-b border-gray-400 py-8">
      <Link to={'/'}>
        <img src="" alt="logo" />
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

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <Link to="/">Modo Nocturno</Link>
          </li>
          <li>
            <Link to="/Favourites">Favoritos</Link>
          </li>
          <li>
            <Link to="/MyGifos">Mis Gifos</Link>
          </li>
          <li>
            <Link to="/CreateGifo"><img src={createGifoLogo} alt="" /></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}