import logo from './logo.svg';
import { render } from "react-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Usuarios from './pages/Usuarios';
import Admin from './components/Admin';
import Ordenes from './pages/Ordenes';
import UsuariosAdmin from './pages/UsuariosAdmin'
import ProductosAdmin from './pages/ProductosAdmin';
import OrdenesCoord from './pages/OrdenesCoord';
import Client from './pages/Client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Login' element={<Admin/>} />
                <Route path='/Usuarios' element={<Usuarios/>} />
                <Route path='/Productos' element={<Productos/>} />
                <Route path='/Ordenes' element={<Ordenes/>} />
                <Route path='/UsuariosAdmin' element={<UsuariosAdmin/>} />
                <Route path='/ProductosAdmin' element={<ProductosAdmin/>} />
                <Route path='/OrdenesCoord' element={<OrdenesCoord/>} />
                <Route path='/Client' element={<Client/>} />
            </Routes>
        </BrowserRouter>);
}

export default App;
