import React from 'react';

import { Link } from 'react-router-dom';

import '../App.css';


const NavigationBar = () => {
    return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand" href="#">
          NL
          </span>
      <button 
       className="navbar-toggler"
       type="button"
       data-toggle="collapse"
       data-target="#navbarNavAltMarkup" 
       aria-controls="navbarNavAltMarkup" 
       aria-expanded="false" 
       aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <span className='nav-item nav-link active' href = '#'>
              <Link to='/' className='nav-link'>Home</Link>
              <span className='sr-only'>(current)</span>
          </span>
          
          <span className='nav-item nav-link active' href = '#'>
              <Link to='/about' className='nav-link'>About</Link>
          </span>

          <span className='nav-item nav-link active' href = '#'>
              <Link to='/contact'  className='nav-link'>Contact</Link>
          </span>

        </div>
      </div>
    </nav> 
  
    );
};

export default NavigationBar;


