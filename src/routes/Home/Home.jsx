import { useContext } from 'react';
import './Home.css';
import Tags from '../../components/Tarjeta/Tags';
import { FiltersContext } from '../../context/FiltersContext';

const Home = () => {
  const { filters } = useContext(FiltersContext);

  return (
    <>
      <div className='main-container'>
        <Tags />
      </div>
    </>
  );
};

export default Home;
