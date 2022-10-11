import {BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from '../SideBar';
import Clientes from '../Views/Clientes/';
import Facturas from '../Views/Facturas/';
import Productos from '../Views/Productos/';
import Ventas from '../Views/Ventas/';
function Rutas() {
  return (
    <BrowserRouter>
    <SideBar />
    <Routes>
        <Route path="/" element={<Clientes />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Facturas" element={<Facturas />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Ventas" element={<Ventas />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Rutas;