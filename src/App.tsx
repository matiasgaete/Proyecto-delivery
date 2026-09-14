import { useState } from 'react';
import { Pantalla_Rentabilidad } from './pages/Pantalla_Rentabilidad/Pantalla_Rentabilidad';
import { Pantalla_Inicio } from './pages/Pantalla_Inicio/Pantalla_Inicio';

export default function App() {
  const [sigPantalla, cambiarPantalla] = useState('Inicio');
  return (
    <div className="contenedor-principal">
      {sigPantalla === 'Inicio' && <Pantalla_Inicio ingresar = {cambiarPantalla}/>}
      {sigPantalla === 'Rentabilidad' && <Pantalla_Rentabilidad cerrarSesion = {cambiarPantalla}/>}
    </div>
  )
}