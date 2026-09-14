import './Pantalla_Rentabilidad.css'

export function Pantalla_Rentabilidad({ cerrarSesion }: { cerrarSesion: (nombre: string) => void}) {
    return (
        <div className="grilla">
            <header className="header-rentabilidad">
                <p>RENTABILIDAD</p>
            </header>
            <div className = "menu_lateral">
                <button className="botones">Rentabiliad</button>
                <button className="botones">Agregar Reporte</button>
                <button className="botones">Agregar Entrega</button>
                <button className="botones">Cuenta</button>
                <button className="botones">Configuracion</button>
                <button onClick={() => cerrarSesion('Inicio')} className="botones">Cerrar Sesion</button>
            </div>
            <div className = "frame-locales">
                <div className="etiquetas_locales">
                    <div className="etiquetas_internas_1">MC DONALDS</div>
                    <div className="etiquetas_internas_2">RENTABILIDAD:<br></br><br></br>$1249 / min</div>
                </div>

                <div className="etiquetas_locales">
                    <div className="etiquetas_internas_1">KFC</div>
                    <div className="etiquetas_internas_2">RENTABILIDAD:<br></br><br></br>$1121 / min</div>
                </div>

                <div className="etiquetas_locales">
                    <div className="etiquetas_internas_1">Burger King</div>
                    <div className="etiquetas_internas_2">RENTABILIDAD:<br></br><br></br>$985 / min</div>
                </div>

                <div className="etiquetas_locales">
                    <div className="etiquetas_internas_1">Papa Jhon's</div>
                    <div className="etiquetas_internas_2">RENTABILIDAD:<br></br><br></br>$534 / min</div>
                </div>
            </div>
        </div>
    )
}