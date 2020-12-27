import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { Agenda } from '../components/agenda/Agenda';
import { Consejos } from '../components/consejos/Consejos';
import { Home } from '../components/home/Home';
import { Login } from '../components/login/Login';
import { Novedades } from '../components/noedades/Novedades';
import { Trucos } from '../components/trucos/Trucos';
import { OrdenesDeConstruccionRouter } from './OrdenesDeConstruccionRouter';
import { OrdenesDeConstruccionLista } from '../components/ordenesDeConstruccion/Lista';
import { CrearEditarOrden } from '../components/ordenesDeConstruccion/CrearEditarOrden';
import { OrdenDeConstruccion } from '../components/ordenesDeConstruccion/OrdenDeConstruccion';


export const AppRouter = () => {

    const [navClass,setNavClass] = useState('nav')

    const handleClose = () => {
        setNavClass('nav')
    }

    const hadleOpen = () => {
        setNavClass('nav active')
    }

    return(
        <Router>            
            <div>
                <div 
                    className="btn-open"
                    onClick={ hadleOpen }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="50">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" fill="#ffc55c"/>
                    </svg>
                    
                </div>
                               
                <nav className={navClass}>
                    <div 
                        className="btn-close"
                        onClick={ handleClose }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="#ffc55c"/>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#282c34"/>
                        </svg>
                    </div>
                    <img src="./assets/images/logo.jpeg" />                    

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/ordenesdeconstruccion">Ordenes de Construccion</Link>
                        </li>
                        <li>
                            <Link to="/consejos">Consejos</Link>
                        </li>
                        <li>
                            <Link to="/trucos">Trucos</Link>
                        </li>
                        <li>
                            <Link to="/novedades">Novedades</Link>
                        </li>
                        <li>
                            <Link to="/agenda">Agenda</Link>
                        </li>
                        <li>
                            <Link to="/login">Staff</Link>
                        </li>
                    </ul>
                </nav> 
                              
                <Switch>                   
                    <Route path='/ordenesdeconstruccion' component={ OrdenesDeConstruccionLista } /> 
                    <Route path='/creareditarorden' component={ CrearEditarOrden } /> 
                    <Route path='/ordendeconstruccion' component={ OrdenDeConstruccion } /> 
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/consejos' component={ Consejos } />
                    <Route exact path='/trucos' component={ Trucos } />
                    <Route exact path='/novedades' component={ Novedades } />
                    <Route exact path='/agenda' component={ Agenda } />
                    <Route exact path='/login' component={ Login } />
                    <Redirect to='/'/>
                </Switch>                  
            </div>
        </Router>
    )
}




