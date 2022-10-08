import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from '../Components/Menu/index'
import VistaClientes from '../Views/Clientes/vista';
import VistaFacturas from '../Views/Facturas/vista';
import VistaProductos from '../Views/Productos/vista';
import VistaVentas from '../Views/Ventas/vista';
function Rutas() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/Clientes" element={<VistaClientes />} />
        <Route path="/Facturas" element={<VistaFacturas />} />
        <Route path="/Productos" element={<VistaProductos />} />
        <Route path="/Ventas" element={<VistaVentas />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Rutas;