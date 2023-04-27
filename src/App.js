import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser';
import Home from './Components/Home';
import UpDateUser from './Components/UpDateUser';
import AfficherUser from './Components/AfficherUser';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/AddUser' element={<AddUser/>} /> 
         <Route path='/UpDateUser/:id/:name/:address/:city/:pinCode/:country' element={<UpDateUser/>} /> 
         <Route path='/AfficherUser/:id/:name/:address/:city/:pinCode/:country' element={<AfficherUser/>} />
      </Routes> 
     
    </div>
  );
}

export default App;
