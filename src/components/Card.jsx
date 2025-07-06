
import '../styles/card.css';

function Card({ imagen, titulo, descripcion }) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <div className="card-body">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button>Salidas en Junio</button>
      </div>
    </div>
  );
}

export default Card;