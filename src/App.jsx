import { hero } from '../data/hero_section'
import { about } from '../data/mainSection/about_data'
import { leaderBoard } from '../data/mainSection/leaderBoard_data'
import { news } from '../data/mainSection/news_data'
import { uiAnimation } from '../data/navigation_data/ui-animations'
import './App.css'
import MainContainer from './components/containers/MainContainer'
import UIAnimations from './components/navigation/UIAnimations'
import Hero from './components/sections/Hero'
import AboutUs from './components/sections/mainSections/AboutUs'
import LeaderBoard from './components/sections/mainSections/leaderBoardSection/LeaderBoard'
import NewsSection from './components/sections/mainSections/NewsSection'

function App() {


  return (
    <>
        <Hero data={hero}/>
        <MainContainer content={<AboutUs data={about}/>} />
        <UIAnimations data={uiAnimation}/>
        <MainContainer content={<LeaderBoard data={leaderBoard}/>} />
        <UIAnimations data={uiAnimation}/>
        <MainContainer content={<NewsSection data={news}/>} />
    </>
  )
}

export default App
