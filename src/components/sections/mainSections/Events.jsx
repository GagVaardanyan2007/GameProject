import React from 'react'

export default function Events( { data } ) {
  return (
    <div className='space-y-10'>
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
            <p className='font-desc font-bold text-xl text-description'>{data.NewEventsSection.subDescription}</p>
            
          </div>
          <div className=' space-y-5 ' >
              {data.NewEventsSection.gifts.map((elem,index) => (
                <p className={`${elem.bgcolor} font-desc font-bold text-xl w-fit mx-auto text-description`} key={index}><span key={index} className={` ${elem.number} text-2xl font-bold `}>
                {elem.stNumber}
                </span>{elem.text}</p>
              ))}
            </div>
          <div className='justify-between grid grid-cols-2 gap-3'>
          <button className='border-2 border-yellow-600 text-xl rounded-4xl shadow-xl shadow-black font-bold uppercase
         bg-gray-200/80 hover:bg-yellow-600 hover:text-white justify-center  transition-colors duration-500  py-2 flex  gap-3'>
           {data.NewEventsSection.btnTitle}
           </button>
             <span className='border-2 border-yellow-600 text-xl rounded-4xl shadow-xl shadow-black font-bold uppercase
         bg-gray-200/80 transition-colors duration-500  py-2 flex justify-center '>{data.NewEventsSection.time}</span>
          </div>
              <input type="timer" value={2000} />
          </div>
        </div>
    </div>
  )
}
