import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { loginWithEmailAndPassword } from '../../store/action/auth'

export const Login = () => {

    const dispatch = useDispatch()

    const { uid } = useSelector( state => state.auth)

    console.log( uid )

    const [formValues, handleInputChange ] = useForm({
        email: 'jose@gmail.com',
        password:'1234'
    })
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();        
        dispatch( loginWithEmailAndPassword(email, password) )
    }
    return(
        <main>
            <h2 className="text-center">Login</h2>

            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    className="input"
                    placeholder="Ingrese su email"
                    name="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <label>Usuario</label>
                <input
                    type="password"
                    className="input"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <label>Password</label>
                <button type="submit">
                    Ingresar
                </button>
            </form>
        </main>
    )
}