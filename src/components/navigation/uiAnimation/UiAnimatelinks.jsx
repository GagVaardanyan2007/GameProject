import React from 'react'

export default function UiAnimatelinks( { data } ) {
  return (
    <div className='left-0 top-0 relative w-full '>
      {data.link.map((elem, index) => (
        <a key={index} className={`${elem.item} text-white animate absolute font-bold uppercase text-lg`} href="">{elem.title}</a>
     ))}
    </div>
  )
}
