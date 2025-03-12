import React from 'react'

export default function Events( { data } ) {
  return (
    <div className='space-y-10'>
      <div className='space-y-3'>
       <h1 className="  font-subtitled font-bold text-6xl text-center">{data.title}</h1>
       <p className="text-center font-desc font-bold text-xl text-description">{data.description}</p>
      </div>
       <div className='flex  gap-y-5  gap-x-20'>
        <div className='flex flex-col '>
          <div className='text-center  space-y-3'>
            <h5 className='text-gray-600 font-bold text-3xl mx-auto '>{data.EndEventSection.title}</h5>
            <p className='font-desc font-bold text-xl text-description'>{data.EndEventSection.description}</p>
           
          </div>
          <div className='flex flex-col justify-center gap-y-5 border-2 '>
            {data.EndEventSection.Winners.map((elem, index) =>
            <div className='border-2 flex gap-5'>
              <img src={elem.img}  key={index} className='w-16 rounded-full' alt="" />
              <div>
                  <p key={index} className={`text-gray-800 text-2xl font-bold `}>
                  
                   {elem.title}</p>
                  <p> <span key={index} className={` ${elem.number} text-2xl font-bold `}>
                    {elem.stNumber}
                   </span>{elem.gift}</p>
                </div>
            </div>
            )}
            
            
          </div>
          
          <button className='border-2 border-yellow-600 text-xl rounded-4xl shadow-xl shadow-black font-bold uppercase
              bg-gray-200/80 hover:bg-yellow-600 hover:text-white transition-colors duration-500 w-fit px-8  py-2 flex items-center gap-3'>{data.EndEventSection.btnTitle}</button>
          </div>
            <div className='min-w-2xl h-full rounded-2xl shadow-xl shadow-black overflow-hidden'>
              <img className=' transition-transform duration-500  hover:scale-110' src={data.EndEventSection.img} alt="newsImg" />
            </div>
       </div>
       <div>
       <h1 className="  font-subtitled font-bold text-6xl text-center">{data.NewEventsSection.title}</h1>
       <p className="text-center font-desc font-bold text-xl text-description">{data.NewEventsSection.description}</p>
        <div className='flex'>

        <div className='max-w-2xl h-full rounded-2xl shadow-xl shadow-black overflow-hidden'>
        <img className=' transition-transform duration-500  hover:scale-110' src={data.NewEventsSection.img} alt="newsImg" />
        </div>
          <div>
            <h5 className='text-gray-600 font-bold text-3xl mx-auto '>{data.NewEventsSection.subtitle}</h5>
            <p className='font-desc font-bold text-xl text-description'>{data.NewEventsSection.subDescription}</p>
             <button>{data.NewEventsSection.btnTitle}</button>
             <span>{data.NewEventsSection.time}</span>
          </div>
        </div>
       </div>
    </div>
  )
}
