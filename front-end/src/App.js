import './App.css';
import Auth from './Component/Auth/Auth';
import Home from './Page/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
    </Routes>
    </>
  );
}

export default App;
