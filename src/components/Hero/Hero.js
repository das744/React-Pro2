import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    // <!-- hero section -->
    <div class="hero-section container-fluid">
        <div class="row">
            <div class="hero-content col-lg-6 col-md-6 col-sm-12">
                <h1>Ready to Capture Your Special Moment?</h1>
                <h2> Melbourne Lence will provide you the best Photography Services for the Modern, Affordable, and unique memory</h2>
                <div class="primary-button">
                  <div class="btn-eff"></div>
                    <a href="#contact"> Contact ME </a>
                </div>
            </div>
            <div class="img-container col-lg-6 col-md-6 col-sm-12 text-center">
              <img src="./imgs/mlence.png" class="center" alt=""/>      
            </div>
        </div>
</div>

  )
}

export default Hero