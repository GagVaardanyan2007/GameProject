
import { Link } from "react-router-dom";
import LeaderBoardCard from "./LeaderBoardCard";

export default function LeaderBoard( { data } ) {
 
  return (
    <div id="leaderboard" className="flex flex-col gap-y-10 p-6 bg-gray-100 shadow-black rounded-2xl shadow-lg">
      <div className="space-y-4">
        <h1 className="  font-subtitled font-bold text-6xl text-center">{data.title}</h1>
        <p className="text-center font-desc font-bold text-xl text-description">{data.description}</p>
      </div>
      <LeaderBoardCard data={data}/>
      <div className="flex gap-20 justify-between">
      <p className="font-desc font-bold text-xl text-description">{data.descriptionN2}</p>
      <Link to={data.path}  className='border-2 cursor-pointer border-yellow-600 text-xl rounded-4xl shadow-xl shadow-black font-bold uppercase
      bg-gray-200/80 hover:bg-yellow-600 hover:text-white   transition-colors duration-500    py-2 flex  items-center w-1/2 justify-center'>{data.btnTitle}</Link>
      </div>
    </div>
  );
}
