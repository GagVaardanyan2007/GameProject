import React from 'react'

export default function EndEvents({ data }) {
  return (
    <div id='events' className='space-y-10 p-6 bg-gray-100 shadow-black rounded-2xl shadow-lg'>
      <div className='space-y-3 text-center'>
        <h1 className='font-subtitled font-bold text-6xl text-gray-800'>{data.title}</h1>
        <p className='font-desc font-bold text-xl text-gray-600'>{data.description}</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-10 justify-center items-center'>
        <div className='flex flex-col space-y-6 max-w-lg'>
          <div className='text-center space-y-2'>
            <h5 className='text-gray-700 font-bold text-3xl'>{data.EndEventSection.title}</h5>
            <p className='font-desc font-medium text-lg text-gray-600'>{data.EndEventSection.description}</p>
          </div>
          <div className='flex flex-col gap-y-4'>
            {data.EndEventSection.Winners.map((elem, index) => (
              <div key={index} className={`${elem.bgColor} rounded-2xl p-3 flex gap-5 items-center shadow-md shadow-black`}> 
                <img src={elem.img} className='w-16 h-16 border-4 border-gray-300 rounded-full' alt='' />
                <div className='flex flex-col'>
                  <p className='text-gray-800 text-xl font-bold'>
                    <span className={`${elem.number} text-2xl font-bold mr-2`}>{elem.stNumber}</span>
                    {elem.title}
                  </p>
                  <p className='font-desc text-lg text-gray-600'>{elem.gift}</p>
                </div>
              </div>
            ))}
          </div>
          <button className='mt-4 border-2 border-yellow-600 text-xl rounded-full shadow-lg font-bold uppercase bg-gray-200 hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-3 shadow-black px-6'>
            {data.EndEventSection.btnTitle}
          </button>
        </div>
        <div className='w-full lg:max-w-2xl h-full rounded-2xl shadow-2xl shadow-black overflow-hidden'>
          <img className='transition-transform duration-500 hover:scale-105' src={data.EndEventSection.img} alt='newsImg' />
        </div>
      </div>
    </div>
  )
}
