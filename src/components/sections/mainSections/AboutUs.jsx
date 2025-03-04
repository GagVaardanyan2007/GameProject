

export default function AboutUs( { data } ) {
  return (
    <div className='flex flex-col w-full justify-center text-center space-y-10 py-18'>
      <h1 className='text-5xl lg:tracking-widest font-bold font-serif'>{data.title}</h1>
      <div className='flex justify-between lg:gap-10 items-center'>
        <ul className={` list-disc flex flex-col space-y-8`}>
        <h3 className='text-2xl font-bold'>{data.SubTitle}</h3>
           {data.description.map((elem, index) => (
          <li  key={index} className='text-lg text-description-500'>{elem}</li>
        ))}
        </ul>
      <div className=' rounded-xl overflow-hidden '>
      <img className='w-full  hover:scale-105 transition-all duration-500 overflow-hidden object-cover' src={data.img} alt="" />
      </div>
      </div>
    </div>
  )
}
