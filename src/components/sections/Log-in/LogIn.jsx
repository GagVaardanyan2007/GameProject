import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn( data ) {
  return (
    <div className='w-full flex justify-center items-center h-screen '>
      <div className='px-24 bg-gray-300 py-10 border-2 rounded-xl gap-6 text-black items-center shadow-2xl shadow-black  flex flex-col'>
        <h1 className='font-titan text-6xl'>{data.title}</h1>
        <form className='flex gap-6 flex-col w-96' action="">
          {data.inputs.map((elem, index)=> (
            <input className={`${index == 2 && "text-2xl bg-gray-700 cursor-pointer"} hover:opacity-90 transition-all duration-500 py-3 text-white font-desc text-xl border-1 border-gray-600 shadow-black px-3 outline-0 rounded-full w-full shadow-md bg-gray-500 `} key={index} placeholder={elem.placeholder} type={elem.type} />
          ))}
        </form>
        <div className='flex justify-between w-full '> 
          {data.moreButton.map((elem, index) => (
            <Link className='text-xl flex gap-1 hover:text-yellow-600 transition-all duration-500 items-center font-desc  font-bold ' to={elem.path} key={index}>{elem.icon}{elem.title}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
