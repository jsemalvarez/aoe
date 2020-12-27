import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { auth } from './reducer/auth'
import { ordenDeConstruccion } from './reducer/ordenDeConstruccion'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: auth,
    ordenDeConstruccion: ordenDeConstruccion
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);