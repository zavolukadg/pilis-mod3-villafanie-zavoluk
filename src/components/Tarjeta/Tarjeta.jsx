import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DeletedContext } from '../../context/DeletedContext';
import './Tarjeta.css';
import { BsTrash,BsFillEyeFill } from "react-icons/bs";
import { TarjetasContext } from '../../context/TarjetasContext';

const Tarjeta = ({ tarjeta }) => {
  const { id, name, timezone, temp, windspeed ,latitud, longitud,imagen, deleted } = tarjeta
  const { eliminadas, setEliminadas } = useContext(DeletedContext);
  const [isDeleted, setIsDeleted] = useState();
  const { tarjetas ,setTarjetas} = useContext(TarjetasContext); 

  const handleDeleted = () => { //Obtiene todas las tarjetas menos la que se elimino
    setTarjetas(
      tarjetas.filter((tarjeta) => tarjeta.id !== id )
    );
  }

  return (
    <div className='tarjeta-container'>
      <div className='tarjeta'>
        <h1>{name}</h1>
        <Link to={`/tarjeta/${id}`}>
          <img src={imagen} alt="Imagen del lugar" className='tarjeta-imagen'/>
        </Link>
        <h3>{timezone}</h3>
        <h3>{temp} °C</h3>
        <h3>{windspeed} Km/h</h3>
       {/*  <h3>{latitud} °</h3>
        <h3>{longitud} °</h3> */}
      </div>
      <div className='tarjeta-actions'>
        <Link className='btn-see-more' to={`/tarjeta/${id}`}>
          <BsFillEyeFill/> 
          Ver Detalle
        </Link>
        <button className='btn-see-more' onClick={handleDeleted}>
          <BsTrash/>  
          Quitar
        </button>
      </div>
    </div>
  );
}

export default Tarjeta;
