import React from 'react'

export default function NewEvents( { data }) {
  return (
       <div className='space-y-10 p-6 bg-gray-100 shadow-black rounded-2xl shadow-lg'>
          <div className='space-y-3'>
            <h1 className="  font-subtitled font-bold text-6xl text-center">{data.NewEventsSection.title}</h1>
            <p className="text-center font-desc font-bold text-xl text-description">{data.NewEventsSection.description}</p>
          </div>
          <div className='flex gap-20'>
            <div className='max-w-2xl h-full rounded-2xl shadow-xl shadow-black overflow-hidden'>
              <img className=' transition-transform duration-500  hover:scale-110' src={data.NewEventsSection.img} alt="newsImg" />
            </div>
            <div className='space-y-5'>
              <div className='space-y-2   text-center '>
                <h5 className='text-gray-600 font-bold  text-3xl mx-auto '>{data.NewEventsSection.subtitle}</h5>
                <p className='font-desc font-bold text-lg text-description'>{data.NewEventsSection.subDescription}</p>
              </div>
                <div className=' space-y-5' >
                  {data.NewEventsSection.gifts.map((elem,index) => (
                  <p className={`${elem.bgColor} font-desc rounded-2xl p-3 flex gap-5 items-center shadow-md shadow-black font-bold text-xl 
                  mx-auto text-description`} key={index}>
                  <span key={index} className={` ${elem.number} text-2xl font-bold `}>
                  {elem.stNumber}
                  </span>{elem.text}
                  </p>
                  ))}
                </div>
              <div div className='justify-between grid grid-cols-2 gap-3'>
                <button className='border-2 border-yellow-600 text-xl rounded-4xl shadow-xl shadow-black font-bold uppercase
                bg-gray-200/80 hover:bg-yellow-600 hover:text-white justify-center  transition-colors duration-500  py-3 flex  gap-3'>
                  {data.NewEventsSection.btnTitle}
                </button>
                <span className='border-2 border-yellow-600 text-xl rounded-4xl shadow-xl shadow-black font-bold uppercase
                bg-gray-200/80 transition-colors duration-500  py-3 flex justify-center '>{data.NewEventsSection.time}</span>
              </div>
            </div>
          </div>
       </div>
        )
      }
