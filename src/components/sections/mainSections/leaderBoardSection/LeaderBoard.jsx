
import LeaderBoardCard from "./LeaderBoardCard";

export default function LeaderBoard( { data } ) {
 
  return (
    <div className="flex flex-col space-y-10">
      <h1 className="font-serif font-bold text-6xl text-center">{data.title}</h1>
      <p className="text-center text-description">{data.description}</p>
      <LeaderBoardCard data={data}/>
    </div>
  );
}
