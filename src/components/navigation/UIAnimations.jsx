import { useState } from "react";
import { Link } from "react-router-dom";

export default function UIAnimations({ data }) {
  const [stop, setStop] = useState(false);

  function AnimateStop() {
    setStop(true);
  }

  function AnimateStart() {
    setStop(false); 
  }
  return (
    <div className="bg-black/95 flex overflow-hidden h-24 shadow-lg  shadow-black relative items-center w-full">
      <div className="absolute w-full lg:space-x-2 space-x-10 left-0">
        {data.link.map((elem, index) => (
          <Link
           target="_blank"
            key={index}
            onMouseEnter={AnimateStop} 
            onMouseLeave={AnimateStart} 
            className={`${elem.item} ${elem.color} ${elem.bgcolor} border-2 rounded-full px-3 py-2 
            top-1/2 -translate-y-1/2  font-bold uppercase text-lg animate absolute 
            hover:text-white transition-colors duration-500 
            ${stop ? "animateStop " :"animate"}`} 
            to={elem.path}
          >
            {elem.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
