import { FaMountain, FaWater, FaWineBottle } from "react-icons/fa";

function Destacados() {
  return (
    <section className="destacados-section">
      <div className="container">

        <h1>Destinos destacados</h1>
        
        <p>Conocé nuestros destinos más elegidos por los viajeros</p>

        <div className="destacados-grid">
          <div className="destacado-card">
            <FaWater className="icono-destacado" />
            <h3>Bariloche</h3>
            <p>Montañas y lagos espectaculares todo el año.</p>
          </div>
          <div className="destacado-card">
            <FaMountain className="icono-destacado" />
            <h3>Cataratas</h3>
            <p>Una de las maravillas naturales del mundo.</p>
          </div>
          <div className="destacado-card">
            <FaWineBottle className="icono-destacado" />
            <h3>Mendoza</h3>
            <p>Destino ideal para amantes del vino y la naturaleza.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destacados;
