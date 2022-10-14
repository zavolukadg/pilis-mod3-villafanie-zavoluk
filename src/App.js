import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';
import TarjetaCreation from './routes/Tarjeta/TarjetaCreation';
import TarjetaDetail from './routes/Tarjeta/TarjetaDetail';
import TarjetaEdit from './routes/Tarjeta/TarjetaEdit';

function App() {

  return (
      <div className='App'>
          <Routes>
            <Route path='/' element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='tarjeta/:id' element={<TarjetaDetail/>}/>
              <Route path='tarjeta/create' element={<TarjetaCreation/>}/>
              <Route path='tarjeta/edit:id' element={<TarjetaEdit/>}/>
            </Route>
          </Routes>
      </div>
  );
}

export default App;
