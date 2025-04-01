

export default function AboutUs( { data } ) {
  return (
    <div id="about" className='flex flex-col w-full  text-center lg:gap-y-10  p-6 bg-gray-100 shadow-black rounded-2xl shadow-lg'>
      <h1 className='font-subtitled md:text-4xl text-2xl font-bold lg:text-6xl text-center'>{data.title}</h1>
        <div className='xl:flex space-y-5  xl:gap-20 items-center justify-between px-5'>
          <ul className={` list-disc flex flex-col gap-3  lg:gap-y-8`}>
            <h3 className='xl:text-2xl text-lg font-bold'>{data.SubTitle}</h3>
            {data.description.map((elem, index) => (
            <li  key={index} className='font-desc font-bold lg:text-xl text-md text-description'>{elem}</li>
            ))}
          </ul>
          <div className='shadow-black shadow-xl rounded-xl overflow-hidden '>
            <img className='w-full  hover:scale-105 transition-all ease-in-out duration-500 overflow-hidden object-cover' src={data.img} alt="" />
          </div>
        </div>
    </div>
  )
}
