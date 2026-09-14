import './Pantalla_Inicio.css'

export function Pantalla_Inicio({ ingresar }: { ingresar: (nombre: string) => void}) {
    return (
        <div className="pantalla_inicio grilla">
            <div className="frame_bt_inicio">
                <button onClick={() => ingresar('Rentabilidad')} className="botones botones_inicio">INGRESAR</button>
                <button className="botones botones_inicio">CREAR CUENTA</button>
            </div>
        </div>
    )
}