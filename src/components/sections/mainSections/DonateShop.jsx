import React from 'react'

export default function DonateShop( { data } ) {
  return (
    <div className="flex flex-col gap-y-10 p-6 bg-gray-100 shadow-black rounded-2xl shadow-lg">
      <div className="space-y-4">
        <h1 className="  font-subtitled font-bold text-6xl text-center">{data.title}</h1>
        <p className="text-center font-desc font-bold text-xl text-description">{data.description}</p>
      </div>
      <div className='grid grid-cols-3 gap-20 mx-auto '>
        {data.cards.map((elem, index) => (  
        <div key={index} className='key={index} text-center shadow-lg space-y-3 shadow-black bg-gray-200 p-6 rounded-xl'>
          <h3 className='text-gray-600 font-bold  text-3xl' >{elem.title}</h3>
          <p className='font-desc font-bold text-lg text-description' >{elem.description}</p>
          <p className='font-desc font-bold text-3xl text-green-600' >{elem.money}</p>
          <button  className='border-2 border-yellow-600 text-xl rounded-4xl shadow-xl shadow-black font-bold uppercase
        bg-gray-200/80 hover:bg-yellow-600 hover:text-white justify-center mx-auto px-12  transition-colors duration-500  py-2 flex  gap-3'>
          {elem.btnTitle}
          </button>
        </div>
      ))}
      </div>
    </div>
  )
}