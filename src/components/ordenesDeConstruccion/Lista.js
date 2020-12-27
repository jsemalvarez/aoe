import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loadingBuildOreders} from './../../store/action/ordenDeConstruccion'

import { Link } from "react-router-dom"

export const OrdenesDeConstruccionLista = () => {

    const dispatch = useDispatch()    
    
    const { ordenDeConstruccion:lista } = useSelector( state => state)  
    
    useEffect(()=>{
        dispatch(loadingBuildOreders())
    },[dispatch])

    return (
        <main>
            <Link className="btn" to="/creareditarorden">Nuevo</Link>
            <h2 className="text-center">Ordenes de Construccion</h2>
            
            <ul>                
                {
                    lista.map( item => {
                        return (
                            <li key={item.id} style={{display:'flex',alignItems: 'stretch'}}>
                                
                                <Link
                                    to={{
                                    pathname: "/ordendeconstruccion",
                                    value: {id:item.id} 
                                    }}
                                    style={{flexGrow: 8}}
                                >
                                    {item.nombre}
                                </Link>                           
                                <div style={{flexGrow: 1}}>                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="#ffc55c"/>
                                    </svg>
                                </div>
                                <div style={{flexGrow: 1}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#ffc55c"/>
                                    </svg>
                                </div>                                
                            </li>
                        )
                    })                    
                }               
            </ul>
        </main>
    )
}