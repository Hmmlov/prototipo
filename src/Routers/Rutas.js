import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from '../Components/Menu/index'
import Clientes from '../Views/Clientes';
import Facturas from '../Views/Facturas';
import Productos from '../Views/Productos';
import Ventas from '../Views/Ventas';
function Rutas() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Facturas" element={<Facturas />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Ventas" element={<Ventas />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Rutas;