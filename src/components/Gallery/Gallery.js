import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
   
    <section>
        <div class="gallery-section" id="gallery">
            <h3>Photo Gallery </h3>
           
            <div class="row">
                <div class="column">
                  <img src="./imgs/img18.jpg " />
                  <img src="./imgs/family.jpg" />
                  <img src="./imgs/baby.jpg"  />
                  <img src="./imgs/nature.jpg"/>
                  <img src="./imgs/protraite.jpg"/>
                  <img src="./imgs/img19.jpg"/>
                 
                </div>
                <div class="column">
                  <img src="./imgs/newborn.jpg" />
                  <img src="./imgs/wedding.jpg" />
                  <img src="./imgs/img8.jpg" />
                  <img src="./imgs/img16.jpg" />
                </div>
                <div class="column">
                  <img src="./imgs/img10.jpg" /> 
                  <img src="./imgs/img11.jpg" />
                  <img src="./imgs/img12.jpg" />
                  <img src="./imgs/img13.jpg" />
                  <img src="./imgs/img14.jpg" />
                  <img src="./imgs/img4.jpg" />
                 
                </div>
                <div class="column">
                  <img src="./imgs/img15.jpg" />
                  <img src="./imgs/img7.jpg" />
                  <img src="./imgs/img2.jpg" />
                  <img src="./imgs/img3.jpg" /> 
                </div>
              </div>
            
        </div>
    </section>
  )
}

export default Gallery