import './Pantalla_Agregar_Entrega.css'

export function Pantalla_Agregar_Entrega() {
  return (
<div className="grilla pantalla-agregar-entrega">
      {/* Título */}
      <header className="titulo">AGREGAR ENTREGA</header>

      {/* Barra lateral: 3 columnas */}
      <nav className="barra-lateral">
        <a className="botones" href="rentabilidad.html">Rentabilidad</a>
        <button className="botones" type="button">Agregar Reporte</button>
        <a className="botones activo" href="agregar_entrega.html">Agregar Entrega</a>
        <button className="botones" type="button">Cuenta</button>
        <button className="botones" type="button">Configuracion</button>
        <a className="botones" href="login.html">Cerrar Sesion</a>
      </nav>

      {/* Contenido: 9 columnas */}
      <section className="contenido">
        <form className="form-datos" onSubmit={(e) => e.preventDefault()}>
          <div className="fila">
            <label htmlFor="hora-aceptacion">Hora de Aceptacion</label>
            <div className="campo-valor">
              <input type="time" id="hora-aceptacion" name="hora-aceptacion" />
            </div>
          </div>
          
          {/* Agrega aquí el resto de las filas de tu formulario original */}
        </form>
      </section>
    </div>
  )
}