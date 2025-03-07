import React from 'react'

export default function Hero( { data } ) {
  return (
    <div className="h-screen w-full">
  <div className="object-cover bg-cover items-center left-0 top-0 flex justify-center  lg:justify-end w-full h-full bg-fixed " style={{backgroundImage:data.HeroImg}} >
       <div className="lg:w-2xl w-lg lg:h-2xl  m-12 text-center flex flex-col backdrop-blur-sm border-1 border-black/30 lg:p-7 py-4 space-y-3 lg:space-y-6 bg-black/15   rounded-xl">
      <h1 className="lg:text-6xl text-xl font-extralight uppercase  text-white font-titan ">{data.title}</h1>
      <p className="lg:text-lg text-gray-300 font-bold  font-desc text-xl">{data.description}</p>
      <a
        href={data.btnPath}
        className=" bg-black lg:text-2xl lg:w-full font-desc px-5 w-fit font-bold text-white m-auto py-2 lg:py-5 rounded-md  uppercase  hover:bg-white hover:text-black transition-colors duration-500">
        {data.btnTitle}
      </a>
  </div>
    </div>
 
</div>

  )
}
