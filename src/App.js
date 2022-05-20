import React from 'react';
import NavigationBar from './components/NavigationBar';



import './App.css';

import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';



const App = () => {



  return (
   <div >
    <HashRouter>

    <NavigationBar /> 

    <Routes>

      <Route path='/' element={<Home/>} />

      <Route path='/about' element={<About/> } />

      <Route path='/contact' element={<Contact/>} />

      <Route path='*' element={<NoMatch/>} />


      </Routes>
    
    
      </HashRouter>
      </div>
    
    );
  
};

export default App;
