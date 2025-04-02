import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/inter';
import App from './App.jsx'
import { navbar } from '../data/sections/navbar_data.js'
import Navbar from './components/navigation/Navbar.jsx';
import { footer } from '../data/sections/footer_data.js';
import Footer from './components/sections/mainSections/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './components/sections/Log-in/LogIn.jsx';
import { login } from '../data/login/login_data.js';
import News from './pages/News.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar data={navbar} />
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/LogIn' element={<LogIn data={login}/>} />
    <Route path='/news' element={<News />} />
  </Routes>
  <Footer data={footer} />
</BrowserRouter>

)
