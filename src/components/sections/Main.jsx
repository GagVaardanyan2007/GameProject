import React from 'react'
import { about, } from '../../../data/mainSection/about_data'
import { leaderBoard } from '../../../data/mainSection/leaderBoard_data'
import { uiAnimation } from '../../../data/navigation_data/ui-animations.js'
import { news } from '../../../data/mainSection/news_data'
import AboutUs from './mainSections/AboutUs'
import NewsSection from './mainSections/NewsSection'
import LeaderBoard from './mainSections/leaderBoardSection/LeaderBoard'
import LinksAnimationBar from '../navigation/UIAnimations.jsx'

export default function Main( { data } ) {
  return (
    <div className='w-3/4 m-auto flex flex-col'>
       <AboutUs data={about}/>
       <LinksAnimationBar data={uiAnimation}/>
       <LeaderBoard data={leaderBoard}/>
       <NewsSection data={news}/>
    </div>
  )
}
