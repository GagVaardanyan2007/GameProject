
import LeaderBoardCard from "./LeaderBoardCard";

export default function LeaderBoard( { data } ) {
 
  return (
    <div className="flex flex-col gap-y-10">
      <div className="space-y-4">
      <h1 className="  font-subtitled font-bold text-6xl text-center">{data.title}</h1>
      <p className="text-center font-desc font-bold text-xl text-description">{data.description}</p>
      </div>
      <LeaderBoardCard data={data}/>
    </div>
  );
}
