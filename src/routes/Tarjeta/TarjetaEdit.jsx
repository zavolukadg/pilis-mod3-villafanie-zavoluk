import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
import { TarjetasContext } from '../../context/TarjetasContext';
import { getTimeInfo } from '../../service';
import './TarjetaEdit.css';

const TarjetaDetail = () => {
  const { id } = useParams();
  const { tarjetas, setTarjetas } = useContext(TarjetasContext);
  const navigate = useNavigate()
  const [tarjeta] = tarjetas.filter(
    (tarjeta) => tarjeta.id === Number(id)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    reValidateMode: 'onChange',
  });

  setValue("id", tarjeta.id)
  setValue("longitud", tarjeta.longitud)
  setValue("latitud", tarjeta.latitud)
  setValue("name", tarjeta.name)
  setValue("timezone", tarjeta.timezone)
  setValue("windspeed", tarjeta.windspeed)
  setValue("temp", tarjeta.temp)
  setValue("imagen", tarjeta.imagen)

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

  const onSubmit = (data) => {
    console.log("Id de la tarjeta modificada: " + data.id);
    const tarjetaNew = {
      id : data.id,
      longitud : data.longitud,
      latitud : data.latitud,
      name : data.name,
      timezone : data.timezone,
      windspeed : data.windspeed,
      temp : data.temp,
      imagen : data.imagen,
      deleted : false
    }
    const tarjetasFiltradas = tarjetas.filter(
      (tarjeta) => tarjeta.id !== Number(id)
    );
    setTarjetas([...tarjetasFiltradas, tarjetaNew])
    console.log("Tarjeta Modificada Con Exito")
    navigate('/')
  }

  return (
    <div className='tarjeta-display-container'>
      <h1> Modificación de Tarjeta </h1>
      <div className='tarjeta-display-card'>
        <form className='tarjeta-form' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='hidden'
            value = {tarjeta.id}
            {...register('id')}
          />
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
            placeholder='Latitud'
            {...register('latitud', {
              required: 'Debe ingresar la latitud',
            })}
          />
          <p>{errors.latitud?.message}</p>

          <input
            className='input-tarjeta-name-form'
            type='text'
            placeholder='Longitud'
            {...register('longitud', {
              required: 'Debe ingresar la longitud',
            })}
          />
          <p>{errors.longitud?.message}</p>

          <input
            className='input-tarjeta-name-form'
            type='text'
            placeholder='Ubicacion'
            {...register('timezone', {
              required: 'Debe Ingresar la ubicacion',
            })}
          />
          <p>{errors.timezone?.message}</p>

          <input
            className='input-tarjeta-name-form'
            type='text'
            placeholder='Temperatura'
            {...register('temp', {
              required: 'Debe cargar la temperatura.',
            })}
          />
          <p>{errors.windspeed?.message}</p>  

          <input
            className='input-tarjeta-name-form'
            type='text'
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
          
          <div className='tarjeta-edit-actions'>
            <button className='btn-form' onClick={e => cargarInfoClima(e)}>
              Cargar Datos
            </button>
            <button className='btn-form' type='submit'>
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
      <Link className='btn-form' to='/'>
            Volver al Inicio
        </Link>
    </div>
  );
};

export default TarjetaDetail;
