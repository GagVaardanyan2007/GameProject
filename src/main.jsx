import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/inter';
import App from './App.jsx'
import { navbar } from '../data/navigation_data/navbar_data.js'
import Navbar from './components/navigation/Navbar.jsx';
import { footer } from '../data/footer_data.js';
import Footer from './components/sections/mainSections/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar data={navbar}/>
    <App />
    <Footer data={footer} />
  </StrictMode>,
)
