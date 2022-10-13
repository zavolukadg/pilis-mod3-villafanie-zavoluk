import { useContext, useState } from 'react';
import './Home.css';
import { FiltersContext } from '../../context/FiltersContext';
import { TarjetasContext } from '../../context/TarjetasContext';
import Buscador from '../../components/Buscador/Buscador';

const Home = () => {
  const { tarjetas } = useContext(TarjetasContext); 
  const { filters } = useContext(FiltersContext)

  return (
    <>
      <div className='main-container'>
        <Buscador/>
        {/* <Tarjetas tarjetas={tarjetas}/> */}
      </div>
    </>
  );
};

export default Home;
