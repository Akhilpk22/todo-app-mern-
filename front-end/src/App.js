import './App.css';
import Auth from './Component/Auth/Auth';
import ToDo from './Component/ToDo/ToDo';
import Home from './Page/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/todo' element={<ToDo/>}/>
    </Routes>
    </>
  );
}

export default App;
