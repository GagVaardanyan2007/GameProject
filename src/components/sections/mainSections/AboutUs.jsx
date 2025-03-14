

export default function AboutUs( { data } ) {
  return (
    <div className='flex flex-col w-full  text-center gap-y-10  p-6 bg-gray-100 shadow-black rounded-2xl shadow-lg'>
      <h1 className='font-subtitled font-bold text-6xl text-center'>{data.title}</h1>
        <div className='flex lg:gap-20 items-center justify-between px-5'>
          <ul className={` list-disc flex flex-col space-y-8`}>
            <h3 className='text-2xl font-bold'>{data.SubTitle}</h3>
            {data.description.map((elem, index) => (
            <li  key={index} className='font-desc font-bold text-xl text-description'>{elem}</li>
            ))}
          </ul>
          <div className='shadow-black shadow-xl rounded-xl overflow-hidden '>
            <img className='w-full  hover:scale-105 transition-all ease-in-out duration-500 overflow-hidden object-cover' src={data.img} alt="" />
          </div>
        </div>
    </div>
  )
}
