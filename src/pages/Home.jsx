
import Portada from '../components/Portada';
import Destacados from '../components/Destacados';
import FraseFinal from '../components/FraseFinal';

function Home() {
  return (
    <>
      <Portada /> {/* La portada ocupa toda la pantalla, sin container */}
      <Destacados />
      <FraseFinal />
    </>
  );
}

export default Home;

