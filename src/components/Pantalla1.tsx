export function Pantalla1() {
    return (
        <div className="grilla">
            <header className="ancho_title">
                <p>RENTABILIDAD</p>
            </header>
            <div className = "menu_lateral">
                <button className="botones_laterales">Rentabiliad</button>
                <button className="botones_laterales">Agregar Reporte</button>
                <button className="botones_laterales">Agregar Entrega</button>
                <button className="botones_laterales">Cuenta</button>
                <button className="botones_laterales">Aun no se</button>
                <button className="botones_laterales">Cerrar Sesion</button>
            </div>
            <div className = "ancho_contenido">
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