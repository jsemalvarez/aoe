import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { OrdenesDeConstruccionLista } from '../components/ordenesDeConstruccion/Lista'


export const OrdenesDeConstruccionRouter = () => {
    return(
        <div>

            <Switch>
                <Route 
                    exact
                    path='/ordenesdeconstruccion/lista' 
                    component={ OrdenesDeConstruccionLista } 
                />
                
                <Redirect to='/ordenesdeconstruccion/lista'/>
            </Switch>
        </div>
    )
}