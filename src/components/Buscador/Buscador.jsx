import { useContext, useState } from 'react'
import { TarjetasContext } from '../../context/TarjetasContext';
import Tarjetas from '../../components/Tarjeta/Tarjetas'
import './Buscador.css'

const Buscador2 = () => {
    const [filtro, setFiltro] = useState('')
    const { tarjetas,setTarjetas } = useContext(TarjetasContext);

    const handleSearch = filtroActual => {
        setFiltro(filtroActual.target.value);
    };

    const tarjetasFiltradas = tarjetas.filter(
        (tarjeta) => tarjeta.name.includes(filtro)  
    )

    return (
        <div>
            <label className='label-buscador'>Buscar por Nombre : </label>
            <input className='input-buscador' type="text" 
            id="txtBuscar"
            placeholder='Nombre Lugar' 
            name="txtBuscar" value={filtro} onChange={handleSearch} />

            <Tarjetas tarjetas={tarjetasFiltradas} />
        </div>
    )
}

export default Buscador2;

