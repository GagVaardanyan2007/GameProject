import { useState } from "react";

export default function UIAnimations({ data }) {
  const [stop, setStop] = useState(false);

  function AnimateStop() {
    setStop(true);
  }

  function AnimateStart() {
    setStop(false); 
  }
  return (
    <div className="bg-gray-700 flex overflow-hidden h-24 rounded-full shadow-xl shadow-black relative items-center w-full">
      <div className="absolute w-full left-0">
        {data.link.map((elem, index) => (
          <a
            key={index}
            onMouseEnter={AnimateStop} 
            onMouseLeave={AnimateStart} 
            className={`${elem.item} text-white border-2 rounded-full px-3 py-2 
            top-1/2 -translate-y-1/2  font-bold uppercase text-lg animate absolute
            hover:bg-white hover:text-gray-700 transition-colors duration-500 
            ${stop ? "animateStop " :"animate"}`} 
            href=""
          >
            {elem.title}
          </a>
        ))}
        
      </div>
      
    </div>
  );
}
