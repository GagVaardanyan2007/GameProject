import React from 'react'

export default function Events( { data } ) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <h1>{data.EndEventSection.title}</h1>
      <p>{data.EndEventSection.description}</p>
      <img src={data.EndEventSection.img}/>
      <button>{data.EndEventSection.btntitle}</button>
      {data.EndEventSection.Winners.map((elem, index) =>
        <div>
            <p key={index}>{elem.title}</p>
            <img src={elem.img} alt="" />
        </div>
    )}
    </div>
  )
}
