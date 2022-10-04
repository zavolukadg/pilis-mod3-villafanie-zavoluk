import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home';
import { useContext, useEffect } from 'react';
import { getColorPalettes } from './service';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';

function App() {

  return (
      <div className='App'>
          <Routes>
            <Route path='/' element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path='login' element={<Login/>}/>
            </Route>
          </Routes>
      </div>
  );
}

export default App;
