import React from 'react'

export default function Footer( { data } ) {
  return (
    <div className='flex flex-col w-full  bg-gray-100 shadow-black rounded-2xl shadow-lg '>
      <div className='md:flex justify-around p-6'>
        <div className="flex text-black justify-between flex-col">
          <div> 
            <h1 className="font-subtitled font-bold text-2xl ">{data.inform.title}</h1>
            <p className=" font-desc font-bold text-xl text-description">{data.inform.description}</p>
          </div>
        {data.inform.feedback.map((elem, index) =>(
          <div className='flex gap-1 items-center font-bold text-description' key={index}>
            <span>{elem.icon}</span>
            <p>{elem.inform}</p>
          </div>
        ))}
      </div>
        <div className="justify-between grid grid-cols-3  md:flex md:flex-col">
          {data.links.map((elem, index) => (
            <a  className="hover:text-yellow-600 transition-all duration-500 font-desc font-bold text-xl text-description" key={index} href={elem.path}>{elem.title}</a>
          ))}
        </div>
      </div>
      <div className='md:flex gap-y-3 justify-between items-center bg-gray-300 py-6 lg:px-24'>
        <p>{data.EndFooterSection.CopyRight}</p>
        <div className='flex gap-3 text-gray-950 text-4xl '>
          {data.EndFooterSection.BankCards.map((elem, index) => (
            <span className='hover:text-yellow-600 transition-all duration-500' key={index}>{elem.icon}</span>
          ))}
        </div>
        <div className='flex gap-3 text-xl'>
          {data.EndFooterSection.SocialLinks.map((elem, index) => (
            <span className='border-1 rounded-full p-1 hover:text-yellow-600 transition-all duration-500' key={index}>{elem.icon}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
