import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/inter';
import { navbar } from '../data/sections/navbar_data.js'
import Navbar from './components/navigation/Navbar.jsx';
import { footer } from '../data/sections/footer_data.js';
import Footer from './components/sections/mainSections/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { component } from '../data/componentLog/Components.js';

createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  <Navbar data={navbar} />
  <Routes> 
    {component.allComponent.map((elem, index) => (
        <Route key={index} path={elem.path} element={elem.component} />))}
  </Routes>
  <Footer data={footer} />
</BrowserRouter>
)
