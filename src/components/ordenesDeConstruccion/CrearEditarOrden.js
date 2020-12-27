import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addNewBuildOrder } from '../../store/action/ordenDeConstruccion'

export const CrearEditarOrden = ()=> {

    const [nombre, setNombre ] = useState('')
    const [accion, setAccion ] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [pasos, setPasos ] = useState([])

    const dispatch = useDispatch()
  

    const handleNombre = (e) => {
        setNombre(e.target.value)        
    }

    const handleAccion = (e) => {
        setAccion(e.target.value) 
    }
    
    const handleDescripcion = (e) => {
        setDescripcion(e.target.value) 
    }

    const handleGuardarPaso = () => {
        setPasos([...pasos,{id: new Date().getTime(),accion,descripcion}])
        setAccion('') 
        setDescripcion('') 
    }

    const handleGuardarOrden = () => {
        const orden = {
            nombre,
            pasos
        }
        dispatch(addNewBuildOrder(orden))
        setPasos([])
        setNombre('') 
    }

    return(
        <>
            <div>
                <label>
                    Nombre:
                </label>
                <input
                    value={nombre} 
                    onChange={handleNombre}
                />
                <br/>
                <label>
                    Accion:
                </label>
                <input
                    value={accion} 
                    onChange={handleAccion}
                />
                <br/>
                <label>
                    Descripcion:
                </label>
                <input
                    value={descripcion} 
                    onChange={handleDescripcion}
                />
                <br/>
                <button
                    onClick={handleGuardarPaso}
                >Guardar paso</button>                
                
            </div>
            
            {

                
                <main>
                    <h2 className="text-center">{nombre}</h2>
                    {
                        pasos.map( paso => {
                            return <div key={paso.id} className="item">
                                <div className="item-titulo">
                                    {paso.accion}
                                </div>
                                <div className="sub-item">
                                    {paso.descripcion}
                                </div>                 
                            </div>
                        })
                    }
                        
                </main>
                
            }
            <button
                onClick={handleGuardarOrden}
            >Guardar Orden de construccion</button>
        </>
    )
    
}