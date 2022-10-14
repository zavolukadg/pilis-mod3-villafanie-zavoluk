import Tarjeta from "./Tarjeta";
import './Tarjetas.css'

const Tarjetas = ({ tarjetas }) => {

  return (
    <div className='grid'>
    
      {
        tarjetas.length === 0 ? (
          <span id="msg">No existen tarjetas para mostrar</span>
        ): (
          tarjetas.map((tarjeta) => (
            <Tarjeta key={tarjeta.id} tarjeta={tarjeta} />
          ))
        )
      }
    </div>
  );
};

export default Tarjetas;