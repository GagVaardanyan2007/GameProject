import React from 'react'
import { about, } from '../../../data/mainSection/about_data'
import AboutUs from './mainSections/AboutUs'
import NewsSection from './mainSections/NewsSection'
import { leaderBoard } from '../../../data/mainSection/leaderBoard_data'
import { news } from '../../../data/mainSection/news_data'
import LeaderBoard from './mainSections/leaderBoardSection/LeaderBoard'
import LinksAnimationBar from '../navigation/LinksAnimationBar'

export default function Main( { data } ) {
  return (
    <div className='w-3/4 m-auto flex flex-col'>
       <AboutUs data={about}/>
       <LinksAnimationBar />
       <LeaderBoard data={leaderBoard}/>
       <NewsSection data={news}/>
    </div>
  )
}
