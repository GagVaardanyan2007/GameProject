import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/inter';
import App from './App.jsx'
import { navbar } from '../data/navbar_data.js'
import Navbar from './components/navigations/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar data={navbar}/>
    <App />
  </StrictMode>,
)
