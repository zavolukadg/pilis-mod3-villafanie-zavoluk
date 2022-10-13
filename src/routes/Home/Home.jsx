import { useContext, useState } from 'react';
import './Home.css';
import { FiltersContext } from '../../context/FiltersContext';
import { TarjetasContext } from '../../context/TarjetasContext';
import Buscador2 from '../../components/Buscador/Buscador2';

const Home = () => {
  const { tarjetas } = useContext(TarjetasContext); 
  const { filters } = useContext(FiltersContext)

  return (
    <>
      <div className='main-container'>
        <Buscador2/>
        {/* <Tarjetas tarjetas={tarjetas}/> */}
      </div>
    </>
  );
};

export default Home;
