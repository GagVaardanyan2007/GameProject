import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/inter';
import App from './App.jsx'
import { navbar } from '../data/navigation_data/navbar_data.js'
import Navbar from './components/navigation/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar data={navbar}/>
    <App />
  </StrictMode>,
)
