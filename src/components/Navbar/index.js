import React from 'react';
import Burger from './Burger';
import './index.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/"><img src="/images/logo.png" className="img-fluid" alt=""/></Link>
      </div>
      <Burger />
    </div>
  )
}

export default Navbar