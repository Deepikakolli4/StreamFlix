import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-brand'>
             <Link to="/">StreamFlix</Link>
            </div>
            <div className='navbar-links'>
             <Link to="/" className='nav-link'>HomePage</Link>
             <Link to="/favorites" className='nav-link'>Favourites</Link>
            </div>

        </nav>

    </div>
  )
}

export default NavBar