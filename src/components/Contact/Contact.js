import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
  
        <h1 class="section-header">Contact</h1>
        
        <div class="contact-wrapper">
        
       
          
          <form id="contact-form" class="form-horizontal" role="form">
             
            <div class="form-group">
              <div class="col-sm-12">
                <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required />
              </div>
            </div>
      
            <div class="form-group">
              <div class="col-sm-12">
                <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
              </div>
            </div>
      
            <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
            
            <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i>
              </div>
            
            </button>
            
          </form>
          
      
          
            <div class="direct-contact-container">
      
              <ul class="contact-list">
                <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place"> South Morang, VIC</span></i></li>
                
                <li class="list-item"><i class="fas fa-phone fa-2x"><span class="contact-text phone"><a href="tel:91-0420-864-802" title="Give me a call"> 0493 037 566 </a></span></i></li>
                
                <li class="list-item"><i class="fas fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email"> admin@melbournelence.com</a></span></i></li>
                
              </ul>
      
              <hr/>
              <ul class="social-media-list">
                <li><a href="https://facebook.com" target="_blank" class="contact-icon">
                  <i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                </li>
                <li><a href="http://pinterest.com" target="_blank" class="contact-icon">
                  <i class="fab fa-pinterest-p" aria-hidden="true"></i></a>
                </li>
                <li><a href="http://twitter.com" target="_blank" class="contact-icon">
                  <i class="fab fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li><a href="http://instagram.com" target="_blank" class="contact-icon">
                  <i class="fab fa-instagram" aria-hidden="true"></i></a>
                </li>       
              </ul>
              <hr/>
      
        
      
            </div>
          
        </div>
        
      </section>  
   
  )
}

export default Contact