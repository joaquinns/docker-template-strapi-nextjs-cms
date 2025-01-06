"use client";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-sm shadow-white/40 h-16">
      <nav className="relative max-w-6xl mx-auto px-4 lg:px-0 h-full">
        <div className="flex justify-between items-center h-full lg:px-4">
          <div>logo</div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          >
            {/* Línea superior */}
            <span
              className={`absolute w-6 h-[3px] rounded bg-white transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            {/* Línea del medio */}
            <span
              className={`absolute w-6 h-[3px] rounded bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            {/* Línea inferior */}
            <span
              className={`absolute w-6 h-[3px] rounded bg-white transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>

          <ul
            className={`fixed top-16 left-0 right-0 p-4 flex-col w-full h-screen font-bold text-2xl lg:flex lg:gap-4 lg:justify-center lg:items-center lg:font-semibold lg:text-base lg:flex-row lg:relative lg:w-auto lg:h-full lg:top-0 lg:p-0 lg:bg-transparent lg:bg-opacity-100 lg:backdrop-filter-none lg:backdrop-blur-none bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg lg:translate-y-0 transition-transform duration-500 ease-in-out ${
              isMenuOpen
                ? "transform translate-y-0"
                : "transform -translate-y-[calc(100%+64px)]"
            }`}
          >
            <li>
              <a className="block w-full h-full py-2" href="#">
                Categorias
              </a>
            </li>
            <li>
              <a className="block w-full h-full py-2" href="#">
                Categorias
              </a>
            </li>
            <li>
              <a className="block w-full h-full py-2" href="#">
                Categorias
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
