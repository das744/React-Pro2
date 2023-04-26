import React from 'react'
import './About.css'

const About = () => {
  return (
    <div class="about-section container-fluid" id="about">
    <div class="row">
    <div class="about-img col-lg-6 col-md-6 col-sm-12"><img src="./imgs/img20.jpg" alt=""/>
    </div>
    <div class="about-content col-lg-6 col-md-6 col-sm-12 my-0">
        <h2>Hi, I'm Mark</h2>
        <p>I'm passionate professional photographer. I am dedicated to capturing the beauty of life through the lens of my camera. My mission is to provide the best possible photography services to people, whether it's for special occasions, corporate events, or just for fun. 
          I believe that every moment is worth capturing, and I strive to create stunning images that tell the story of my clients' lives. 
          </p>
          <div class="primary-button">
            <div class="btn-eff"></div>
              <a href="#contact"> Contact ME </a>
          </div>
    </div>
</div>
</div>

  )
}

export default About