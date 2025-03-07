import React, { useState } from "react";

export default function LeaderBoardCard( { data } ) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleOpen(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="flex justify-between gap-20 text-center ">
      {data.card.map((elem, index) => (
        <div
          key={index}
          className="rounded-3xl shadow-xl overflow-hidden  hover:scale-105 transition-all duration-500 h-[550px] w-full shadow-black"
        >
          <div
            style={{ backgroundImage: elem.img }}
            className="flex justify-end items-end before:duration-500 before:transition-all transition-all
                duration-500 bg-cover before:w-full before:h-full before:absolute relative before:top-0 before:left-0 
                hover:before:bg-gray-700/20 before:bg-gray-800/60 h-full"
          >
            <div className="absolute backdrop-blur-lg w-full justify-center flex px-10 h-1/2 flex-col space-y-5">
              <h5 className="text-2xl font-bold text-white">{elem.subtitle}</h5>
              <p className="font-desc font-bold text-xl text-des text-gray-400">{elem.description}</p>
              <button
                onClick={() => toggleOpen(index)}
                className="relative border-2 border-yellow-600  rounded-4xl shadow-xl shadow-black font-bold uppercase
                    bg-gray-200/80 hover:bg-yellow-600 hover:text-white transition-colors duration-500 w-fit px-6 mx-auto py-2 flex items-center gap-3"
              >
                {elem.btnTitle} {elem.icon}
              </button>
            </div>
            <div
              className={`w-full h-full bg-black/95 text-white absolute flex-col left-0 p-5 transition-all duration-700 ${
                openIndex === index ? "top-0 opacity-100 flex" : "-top-1/2 opacity-0"
              }`}
            >
              <button
                onClick={() => toggleOpen(index)}
                className="text-2xl font-bold border-2 border-white w-fit py-2 px-4 rounded-full"
              >
                X
              </button>
              <h1 className="text-white text-2xl uppercase text-center font-bold">
                {elem.subtitle}
              </h1>
              <div className="space-y-2">
                {elem.TopPlayers.map((player, index) => (
                  <div key={index} className="flex justify-between text-xl">
                    <p>{index + 1 + ") "}{player.Player}</p>
                    <p>{player.count}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
