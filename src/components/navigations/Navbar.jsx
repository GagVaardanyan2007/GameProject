import React, { useState } from 'react'

export default function Navbar( { data } ) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="z-50 flex fixed text-white bg-black/30 font-bold top-0 left-0  w-full not-lg:flex-col lg:justify-between 
    justify-center text-center items-center lg:px-10 py-5  fix gap-5">
      <img className='w-20 h-20' src={data.logo} alt="logo" />
      <div className={` ${isMenuOpen ? "flex " : "hidden" } not-lg:flex-col   lg:gap-12 md:gap-5 sm:gap-5 gap-4 font-sans  lg:flex    font-semibold   items-center text-xl uppercase`}>
        {data.links.map((elem, index) => (
        <a className={`${index == 0 ? "before:rounded-lg before:bg-yellow-600 before:w-full before:top-7 before:h-1 before:absolute" :
           "before:rounded-lg before:bg-yellow-600 before:w-0 before:top-7 before:h-1 before:absolute hover:before:w-full before:transition-all ease-in-out duration-1000"} w-fit  relative`} key={index} href={elem.path}>{elem.title}</a>
      ))}
      </div>
      <div className='flex gap-6 '>
         {data.icons.map((elem, index) =>(
        <button  onClick={index === 0 ? toggleMenu : undefined} className={`${index == 0 ? "lg:hidden" : "flex"} 
        before:rounded-lg before:bg-yellow-600 before:w-0 before:top-14 relative before:h-1 before:absolute hover:before:w-full 
        before:transition-all ease-in-out duration-1000 w-fit text-5xl`} key={index} >{elem.icon}</button>
         ))}
      </div>
     
    </div>
  )
}
