import { hero } from '../data/hero_section'
import './App.css'
import Hero from './components/sections/Hero'
import Main from './components/sections/Main'

function App() {


  return (
    <>
        <Hero data={hero}/>
        <Main/>
    </>
  )
}

export default App
