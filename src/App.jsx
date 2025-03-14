import { hero } from '../data/hero_section'
import { about } from '../data/mainSection/about_data'
import { event } from '../data/mainSection/event_data'
import { leaderBoard } from '../data/mainSection/leaderBoard_data'
import { news } from '../data/mainSection/news_data'
import { uiAnimation } from '../data/navigation_data/ui-animations'
import './App.css'
import MainContainer from './components/containers/MainContainer'
import UIAnimations from './components/navigation/UIAnimations'
import Hero from './components/sections/Hero'
import AboutUs from './components/sections/mainSections/AboutUs'

import EndEvents from './components/sections/mainSections/events/EndEvents'
import NewEvents from './components/sections/mainSections/events/NewEvents'
import LeaderBoard from './components/sections/mainSections/leaderBoardSection/LeaderBoard'
import NewsSection from './components/sections/mainSections/NewsSection'
function App() {


  return (
    <>
        <Hero data={hero}/>
        <MainContainer content={<AboutUs data={about}/>} />
        <UIAnimations data={uiAnimation}/>
        <MainContainer content={<LeaderBoard data={leaderBoard}/>} />
        <MainContainer content={<NewsSection data={news}/>} />
        <UIAnimations data={uiAnimation}/>
        <MainContainer content={<EndEvents data={event}/>} />
        <MainContainer content={<NewEvents   data={event}/>} />
    </>
  )
}

export default App
