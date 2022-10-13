import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TarjetasContext } from '../../context/TarjetasContext';
import './TarjetaDetail.css';

const TarjetaDetail = () => {
  const { id } = useParams();
  const { tarjetas } = useContext(TarjetasContext);
  const [tarjeta] = tarjetas.filter(
    (tarjeta) => tarjeta.id === Number(id)
  );

  return (
    <div className='tarjeta-display-container'>
      <h1> Detalle de Tarjeta Seleccionada </h1>
      <div className='tarjeta-display-card'>
        <h1 className='tarjeta-display-name'>Tarjeta N°: {tarjeta.id}</h1>
        <img src={tarjeta.imagen} alt="Imagen del lugar" className='imagen'/>
        <h2 className='tarjeta-display-name'>Ubicacion: {tarjeta.name}</h2>
        <h3>Zona: {tarjeta.timezone}</h3>
        <h3>Temperatura: {tarjeta.temp} °C</h3>
        <h3>Velocidad del Viento: {tarjeta.windspeed} Km/h</h3>
        <h3>Latitud: {tarjeta.latitud} °</h3>
        <h3>Longitud: {tarjeta.longitud} °</h3>
      </div>
      <Link className='btn-back' to='/'>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default TarjetaDetail;
