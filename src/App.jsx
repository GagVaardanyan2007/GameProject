import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { hero } from '../data/hero_section';
import { about } from '../data/mainSection/about_data';
import { donates } from '../data/mainSection/donateShop';
import { event } from '../data/mainSection/event_data';
import { leaderBoard } from '../data/mainSection/leaderBoard_data';
import { news } from '../data/mainSection/news_data';
import { reviews } from '../data/mainSection/reviews_data';
import { uiAnimation } from '../data/navigation_data/ui-animations';
import './App.css';
import MainContainer from './components/containers/MainContainer';
import UIAnimations from './components/navigation/UIAnimations';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/mainSections/AboutUs';
import DonateShop from './components/sections/mainSections/DonateShop';
import EndEvents from './components/sections/mainSections/events/EndEvents';
import NewEvents from './components/sections/mainSections/events/NewEvents';
import LeaderBoard from './components/sections/mainSections/leaderBoardSection/LeaderBoard';
import NewsSection from './components/sections/mainSections/NewsSection';
import Reviews from './components/sections/mainSections/Reviews';

function App() {
  return (
    <div className="scroll-smooth">
      <Router>
        <Hero data={hero} />
        <Routes>
          <Route path="/" element={<MainContainer content={<AboutUs data={about} />} />} />
          <Route path="/leaderboard" element={<MainContainer content={<LeaderBoard data={leaderBoard} />} />} />
          <Route path="/news" element={<MainContainer content={<NewsSection data={news} />} />} />
          <Route path="/events" element={<MainContainer content={<EndEvents data={event} />} />} />
          <Route path="/new-events" element={<MainContainer content={<NewEvents data={event} />} />} />
          <Route path="/donate" element={<MainContainer content={<DonateShop data={donates} />} />} />
          <Route path="/reviews" element={<MainContainer content={<Reviews data={reviews} />} />} />
        </Routes>
        <UIAnimations data={uiAnimation} />
      </Router>
    </div>
  );
}

export default App;
