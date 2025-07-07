import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/portada.css';

import img1 from '../assets/pexels-photo-994605.jpeg';
import img2 from '../assets/pexels-photo-1151282.webp';
import img3 from '../assets/pexels-photo-2631613.jpeg';

function Portada() {
  return (
    <section className="portada">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={img1} alt="Destino 1" />
        </div>
        <div>
          <img src={img2} alt="Destino 2" />
        </div>
        <div>
          <img src={img3} alt="Destino 3" />
        </div>
      </Carousel>
      <div className="portada-texto">
        <h2>¿Cuál es tu próximo destino?</h2>
        
      </div>
    </section>
  );
}

export default Portada;