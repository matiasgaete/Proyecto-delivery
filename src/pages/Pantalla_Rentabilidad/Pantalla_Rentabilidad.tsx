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
                <div className="etiquetas_locales">Local 1</div>
                <div className="etiquetas_locales">Local 2</div>
                <div className="etiquetas_locales">Local 3</div>
                <div className="etiquetas_locales">Local 4</div>
                <div className="etiquetas_locales">Local 5</div>
                <div className="etiquetas_locales">Local 6</div>
                <div className="etiquetas_locales">Local 7</div>
            </div>
        </div>
    )
}