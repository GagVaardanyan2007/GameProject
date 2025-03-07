import React from 'react'

export default function NewsSection( { data } ) {
  return (
    <div className='flex flex-col space-y-10'>
     <h1 className='font-subtitled font-bold text-6xl text-center'>{data.title}</h1>
      <div className='flex gap-20'>
        <div className='min-w-2xl rounded-2xl overflow-hidden'>
          <img className='  transition-transform duration-500 shadow-xl shadow-black hover:scale-110' src={data.img} alt="newsImg" />
        </div>
          <div className='px-5 flex flex-col space-y-5 '>
              <h5 className='text-center text-gray-600 font-bold text-3xl w-1/2 mx-auto '>{data.subTitle}</h5>
              <p className='text-center font-desc font-bold text-xl text-description'>{data.description}</p>
              <button className='relative border-2 border-yellow-600  rounded-4xl shadow-xl shadow-black font-bold uppercase
              bg-gray-200/80 hover:bg-yellow-600 hover:text-white transition-colors duration-500 w-fit px-6 mx-auto py-2 flex items-center gap-3'>{data.btnTitle}</button>
          </div>
      </div>
    </div>
  )
}
