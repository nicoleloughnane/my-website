import React from 'react';
import NavigationBar from './components/NavigationBar';
//import Layout from './components/Layout';
//import FakeJumbotron from './components/FakeJumbotron';


import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';


const App = () => {

  return (
   <div >
    <BrowserRouter>

    <NavigationBar /> 

    <Routes>

      <Route path='/' element={<Home/>} />

      <Route path='/about' element={<About/> } />

      <Route path='/contact' element={<Contact/>} />

      <Route path='*' element={<NoMatch/>} />

      </Routes>
    
    
      </BrowserRouter>
      </div>
    
    );
  
};

export default App;
