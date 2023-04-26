import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    // <!-- navbar section -->
    <header id="navbar">
        <nav class="navbar-container container">
          <a href="/" class="home-link">
            <div class="navbar-logo"> <img src="./imgs/Mlence1.png" alt=""/></div>
             
          </a>
          <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div id="navbar-menu" aria-labelledby="navbar-toggle">
            <ul class="navbar-links">
              <li class="navbar-item"><a class="navbar-link" href="#about">About</a></li>
              <li class="navbar-item"><a class="navbar-link" href="#service">Services</a></li>
              <li class="navbar-item"><a class="navbar-link" href="#gallery">Gallery</a></li>
              <li class="navbar-item"><a class="navbar-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Navbar