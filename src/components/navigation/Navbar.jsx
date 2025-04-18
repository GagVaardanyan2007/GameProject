import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Navbar({ data }) {
  const [darkMod, setDarkMod] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleDarkMod() {
    setDarkMod(!darkMod);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (darkMod) {
      document.documentElement.classList.add('bg-black/90');
    } else {
      document.documentElement.classList.remove('bg-black/90');
    }
  }, [darkMod]);

  return (
    <div className="z-50 flex fixed text-white bg-black/55 font-bold top-0 left-0 w-full not-lg:flex-col lg:justify-between 
    justify-center text-center items-center lg:px-10 py-5 fix gap-5">
      
      <Link
         className="w-20 h-20 cursor-pointer"
        to={'/'}
      >
        <img  src={data.logo} alt="logo" />
      </Link>

      <div
        className={`${isMenuOpen ? 'flex' : 'hidden'} not-lg:flex-col lg:gap-12 md:gap-5 sm:gap-5 gap-4 font-sans 
        lg:flex font-semibold items-center text-xl uppercase`}
      >
        {data.links.map((elem, index) => (
          <a
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(elem.path);
              target?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false); 
            }}
            className={`${
              index == 0
                ? 'before:rounded-lg before:bg-yellow-600 before:w-full before:top-7 before:h-1 before:absolute'
                : 'before:rounded-lg before:bg-yellow-600 before:w-0 before:top-7 before:h-1 before:absolute hover:before:w-full before:transition-all ease-in-out duration-1000'
            } w-fit relative cursor-pointer`}
            key={index}
          >
            {elem.title}
          </a>
        ))}
      </div>

      <div className="flex gap-6">
        {data.icons.map((elem, index) => (
          <Link
          to={index && elem.path}
          onClick={(e) => {
            if (index !== 2) e.preventDefault();
            if (index === 1) toggleDarkMod();
            if (index === 0) toggleMenu();
          }}
          className={`${index === 0 ? 'lg:hidden' : 'flex'} 
          before:rounded-lg before:bg-yellow-600 before:w-0 before:top-14 relative before:h-1 before:absolute hover:before:w-full 
          before:transition-all ease-in-out duration-1000 w-fit text-5xl`}
          key={index}
        >
          {elem.icon}
        </Link>
        
        ))}
      </div>
    </div>
  );
}
