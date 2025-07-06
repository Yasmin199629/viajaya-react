import React from 'react';
import '../styles/contacto.css';

const Contacto = () => {
  return (
    <section className="contacto">
      <div className="form-box">
        <h2>Dejanos tu contacto y te contactaremos a la brevedad..</h2>
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Teléfono" />
          <input type="text" placeholder="¿Red social por la que conociste?" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;