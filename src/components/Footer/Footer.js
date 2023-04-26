import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer class="text-center footer text-center">
    <div class="container p-4">
      
        <div class="row  text-md-start mt-5">
          
           
          <div class="col-md-4 ">
            <h4 class="pb-3 font-weight-bold">Copyright </h4>
            
            <p class="copy-right"> Copyright © 2023. All Rights Reserved.</p>
          </div>
        
          <div class="col-md-3">
           <h5 class="pb-3 font-weight-bolder">Services </h5>
            <ul class="list-style ps-0 ">
              <li class="pb-3">Family photoshot</li>
              <li class="pb-3">Wedding photography</li>
              <li class="pb-3">Corporate Events</li>
              <li class="pb-3">Fashion photography</li>
              <li class="pb-3">Travel photography</li>
              <li class="pb-3">Product Photography </li>
              
            
            </ul>
          </div>        
          
          <div class="col-md-3 ">
           <h5 class="pb-3 font-weight-bold"> Quick links </h5>
            <ul class="list-style ps-0">
              <li class="pb-3"> <a href="#services"> Services </a></li>
              <li class="pb-3"> <a href="#gallery"> Gallery</a></li>
              <li class="pb-3">  <a href="#contact"> Contact</a></li>
            </ul>
          </div>
        
          <div class="col-md-2 ">
           <h5 class="pb-3 font-weight-bold"> Other </h5>
            <ul class="list-style ps-0">
              <li class="pb-3">Privacy Policy</li>
              <li class="pb-3">Terms of Use</li>
            
              <li class="pb-3">Contact Us</li>
            </ul>
          </div>
        
        </div>
      
    </div>
  </footer>
  )
}

export default Footer