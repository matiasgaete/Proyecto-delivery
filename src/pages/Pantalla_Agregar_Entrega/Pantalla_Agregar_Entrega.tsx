import './Pantalla_Agregar_Entrega.css'

export function Pantalla_Agregar_Entrega({ cerrarSesion, rentabilidad }: { cerrarSesion: (nombre: string) => void;
    rentabilidad: (nombre: string) => void; }) {

    return (
        <div className="grilla">
            <header className="header-agregar-entrega">
                <p>AGREGAR ENTREGA</p>
            </header>

            <div className="menu_lateral">
                <button onClick={() => rentabilidad('Rentabilidad')} className="botones">Rentabiliad</button>
                <button className="botones">Agregar Reporte</button>
                <button className="botones activo">Agregar Entrega</button>
                <button className="botones">Cuenta</button>
                <button className="botones">Configuracion</button>
                <button onClick={() => cerrarSesion('Inicio')} className="botones">Cerrar Sesion</button>
            </div>

            <div className="frame-formulario">
                <div className="fila-dato">
                    <div className="etiqueta-campo">Hora de Aceptacion</div>
                    <div className="valor-campo">
                        <input type="time" name="hora-aceptacion" />
                    </div>
                </div>

                <div className="fila-dato">
                    <div className="etiqueta-campo">Hora de Recogida</div>
                    <div className="valor-campo">
                        <input type="time" name="hora-recogida" />
                    </div>
                </div>

                <div className="fila-dato">
                    <div className="etiqueta-campo">Hora de Entrega</div>
                    <div className="valor-campo">
                        <input type="time" name="hora-entrega" />
                    </div>
                </div>

                <div className="fila-dato">
                    <div className="etiqueta-campo">Monto</div>
                    <div className="valor-campo">
                        <input type="number" name="monto" placeholder="$ 0" min={0} step={1} />
                    </div>
                </div>

                <div className="fila-dato">
                    <div className="etiqueta-campo">Local</div>
                    <div className="valor-campo">
                        <input type="text" name="local" placeholder="Nombre del local" />
                    </div>
                </div>

                <div className="fila-dato">
                    <div className="etiqueta-campo">App</div>
                    <div className="valor-campo">
                        <div className="lista-apps">
                            <div className="opcion-app">
                                <input type="radio" id="app-rappi" name="app" value="Rappi" />
                                <div>Rappi</div>
                            </div>
                            <div className="opcion-app">
                                <input type="radio" id="app-ubereats" name="app" value="Uber Eats" />
                                <div>Uber Eats</div>
                            </div>
                            <div className="opcion-app">
                                <input type="radio" id="app-pedidosya" name="app" value="Pedidos Ya" />
                                <div>Pedidos Ya</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fila-boton">
                    <button className="botones" onClick={() => rentabilidad('Rentabilidad')}>Agregar</button>
                </div>

            </div>
        </div>
    )
}
