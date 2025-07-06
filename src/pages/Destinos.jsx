


import React from 'react';
import '../styles/destinos.css';
import destinos from '../data/destinos';
import Card from '../components/Card';

const Destinos = () => {
  return (
    <section className="destinos-section">
      <div className="container">
        <div className="destinos-wrapper">
          <h2>Destinos</h2>
          <p>Explorá nuestros increíbles destinos turísticos.</p>
          <div className="cards-grid">
            {destinos.map((destino, index) => (
              <Card
                key={index}
                imagen={destino.imagen}
                titulo={destino.titulo}
                descripcion={destino.descripcion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinos;
