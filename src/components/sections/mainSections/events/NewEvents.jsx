import React from 'react'

export default function NewEvents() {
  return (
    <div>
      <div className='space-y-3'>
       <h1 className="font-subtitled font-bold text-6xl text-center">{data.title}</h1>
       <p className="text-center font-desc font-bold text-xl text-description">{data.description}</p>
      </div>
       <div className='flex  gap-y-5  gap-x-20'>
        <div className='flex flex-col space-y-2'>
          <div className='text-center  space-y-2'>
            <h5 className='text-gray-600 font-bold text-3xl mx-auto '>{data.EndEventSection.title}</h5>
            <p className='font-desc font-bold text-xl text-description'>{data.EndEventSection.description}</p>
          </div>
            <div className='flex flex-col'>
                {data.EndEventSection.Winners.map((elem, index) =>
                <div className={`${elem.bgcolor} p-1 flex gap-5 items-center`}>
                    <img src={elem.img}  key={index} className='min-w-16 h-16 border-2 rounded-full' alt="" />
                    <div className='flex flex-col'>
                        <p key={index} className={`text-gray-800 text-2xl  font-bold `}><span key={index} className={` ${elem.number} text-2xl font-bold `}>
                        {elem.stNumber}
                        </span>
                        {elem.title}
                        </p> 
                        <p className='font-desc font-bold text-xl text-description'>
                        {elem.gift}
                        </p>
                    </div>
                </div>)}
          </div>
          <button className='border-2 border-yellow-600 text-xl rounded-4xl shadow-xl shadow-black font-bold uppercase
         bg-gray-200/80 hover:bg-yellow-600 hover:text-white transition-colors duration-500 justify-center  py-2 flex  gap-3'>
           {data.EndEventSection.btnTitle}
           </button>
        </div>
            <div className='min-w-2xl h-full rounded-2xl shadow-xl shadow-black overflow-hidden'>
              <img className=' transition-transform duration-500  hover:scale-110' src={data.EndEventSection.img} alt="newsImg" />
            </div>
       </div>
    </div>
  )
}
