import { useState } from "react";

export default function Reviews({ data }) {
  const [starColor, setStarColor] = useState(Array(5).fill("text-gray-400")); 
  function handleMouseEnter(index) {
    if (index <= 4) {
      const newColors = starColor.map((color, i) => i <= index ? "text-green-600" : "text-gray-400");
      setStarColor(newColors);
    }
  }

  return (
    <div id="reviews" className="flex flex-col gap-y-10 p-6 bg-gray-100 shadow-black rounded-2xl shadow-lg">
      <div className="space-y-4">
        <h1 className="font-subtitled font-bold text-6xl text-center">{data.title}</h1>
        <p className="text-center font-desc font-bold text-xl text-description">{data.description}</p>
      </div>
      <div className='border-1 flex items-center p-5 gap-5 bg-gray-200 justify-around shadow-black rounded-2xl shadow-lg '>
        <img className='w-16 rounded-full border-1 shadow-gray-600 shadow-lg border-gray-700'
          src={data.imagePeople} alt="HumanIcon" />
        <div className="flex w-full flex-col">
          <div className="flex text-3xl">
            {data.stars.map((elem, index) => (
              <button
                key={index}
                onMouseEnter={() => handleMouseEnter(index)} 
                className={starColor[index]}
              >
                {elem.star}
              </button>
            ))}
          </div>
          <textarea id='textInput'
            type="text"
            className={`w-full shadow-gray-600 shadow-lg resize-none py-2 px-4 rounded-full border-1 outline-0 text-gray-700 font-bold `}
            maxLength={271}
            placeholder='Your description' />
        </div>
        <button
          className="text-5xl p-2 hover:bg-green-500 hover:text-white shadow-gray-600 shadow-lg transition-colors duration-500  rounded-full bg-gray-300">
          {data.btnTitle}
        </button>
      </div>
      <div className="flex flex-col gap-y-5 h-[400px] overflow-scroll ">
        {data.questions.map((elem, index) => (
          <div key={index} className='border-1 flex items-center p-5  bg-gray-200 justify-between shadow-black rounded-2xl shadow-lg '>
            <img className='w-16 rounded-full border-1 shadow-gray-600 shadow-lg border-gray-700'
              src={elem.image} alt="HumanIcon" />
            <p className="w-full shadow-gray-600 shadow-lg resize-none py-2 px-4 rounded-full border-1 outline-0 text-gray-700 font-bold ">{elem.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
