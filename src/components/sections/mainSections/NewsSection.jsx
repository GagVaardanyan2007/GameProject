import React from 'react'

export default function NewsSection( { data } ) {
  return (
    <div className='flex flex-col  gap-y-10  p-6 bg-gray-100 shadow-black rounded-2xl shadow-lg'>
     <h1 className='font-subtitled font-bold text-6xl text-center'>{data.title}</h1>
      <div className='flex gap-20'>
        <div className='min-w-2xl h-full rounded-2xl shadow-xl shadow-black overflow-hidden'>
          <img className=' transition-transform duration-500  hover:scale-110' src={data.img} alt="newsImg" />
        </div>
          <div className='px-5 space-y-5 text-left'>
              <h5 className='text-gray-600 font-bold text-3xl mx-auto '>{data.subTitle}</h5>
              <p className='font-desc font-bold text-xl text-description'>{data.description}</p>
              <button className='relative border-2 border-yellow-600 text-xl rounded-4xl shadow-xl shadow-black font-bold uppercase
              bg-gray-200/80 hover:bg-yellow-600 hover:text-white transition-colors duration-500 w-fit px-12  py-3 flex items-center gap-3'>{data.btnTitle}</button>
          </div>
      </div>
    </div>
  )
}
