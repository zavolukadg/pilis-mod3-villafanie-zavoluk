import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate,Link } from 'react-router-dom';
import { TarjetasContext } from '../../context/TarjetasContext';
import { getTimeInfo } from '../../service';
import './TarjetaCreation.css';

const TarjetaCreation = () => {
  const { tarjetas, setTarjetas } = useContext(TarjetasContext)
  const navigate = useNavigate()
  const [tarjeta,setTarjeta] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    reValidateMode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log("Data:");
    console.log(data);
    const tarjetaNew = {
      id : tarjetas.length + 1,
      longitud : data.longitud,
      latitud : data.latitud,
      name : data.name,
      timezone : data.timezone,
      windspeed : data.windspeed,
      temp : data.temp,
      imagen : data.imagen,
      deleted : false
    }
    setTarjetas([...tarjetas, tarjetaNew])
    console.log("Tarjeta Creada Con Exito")
    navigate('/')
  }

  const cargarInfoClima = (e) => { 
    e.preventDefault();
    const longitud = getValues("longitud")
    const latitud = getValues("latitud")
    getTimeInfo(latitud,longitud)
    .then(json => {
        console.log(json);
        setValue("windspeed",json.current_weather.windspeed);
        setValue("timezone",json.timezone);
        setValue("temp",json.current_weather.temperature);
    })
  }

  return (
    <div className='tarjeta-new-container'>
      <h1>Crea una nueva tarjeta</h1>
      <form className='tarjeta-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-tarjeta-name-form'
          type='text'
          placeholder='Nombre Lugar'
          {...register('name', {
            required: 'Ingrese un nombre para la tarjeta',
          })}
        />
        <p>{errors.name?.message}</p>

        <input
          className='input-tarjeta-name-form'
          type='text'
          placeholder='Latitud (ej: -22.6972132)'
          /* value = "-22.6972132" */
          /* value={latitud} */
          {...register('latitud', {
            required: 'Debe ingresar la latitud',
          })}
        />
        <p>{errors.latitud?.message}</p>

        <input
          className='input-tarjeta-name-form'
          type='text'
          placeholder='Longitud (ej: -66.4968405)'
          /* value = "-66.4968405" */
          /* value={longitud} */
          {...register('longitud', {
            required: 'Debe ingresar la longitud',
          })}
        />
        <p>{errors.longitud?.message}</p>

        <input
          className='input-tarjeta-name-form'
          type='text'
          /* value={tarjeta.timezone} */
          placeholder='Ubicacion'
          {...register('timezone', {
            required: 'Debe Ingresar la ubicacion',
          })}
        />
        <p>{errors.timezone?.message}</p>

        <input
          className='input-tarjeta-name-form'
          type='text'
          /* value={tarjeta.temp} */
          placeholder='Temperatura'
          {...register('temp', {
            required: 'Debe cargar la temperatura.',
          })}
        />
        <p>{errors.windspeed?.message}</p>  

        <input
          className='input-tarjeta-name-form'
          type='text'
          /* value={tarjeta.windspeed} */
          placeholder='Velocidad del viento'
          {...register('windspeed', {
            required: 'Debe cargar primero la velocidad del viento con el boton cargar datos.',
          })}
        />
        <p>{errors.windspeed?.message}</p>    

        <input
          className='input-tarjeta-name-form'
          type='text'
          placeholder='Url de imagen'
          {...register('imagen')}
        />
        
        <div className='tarjeta-creation-actions'>
          <button className='btn-form' onClick={e => cargarInfoClima(e)}>
            Cargar Datos
          </button>
          <button className='btn-form' type='submit'>
            Crear Tarjeta
          </button>
        </div>
      </form>

      <Link className='btn-back' to='/'>
          Volver al Inicio
      </Link>
    </div>
  );
};

export default TarjetaCreation;
