import React from 'react'
import { main_section } from '../../../data/mainSection/main_sections'
import AboutUs from './mainSections/AboutUs'
import LeaderBoard from './mainSections/leaderBoardSection/LeaderBoard'

export default function Main( { data } ) {
  return (
    <div className='w-3/4 m-auto flex flex-col'>
       <AboutUs data={main_section.about}/>
       <LeaderBoard data={main_section.leaderBoard}/>
    </div>
  )
}
