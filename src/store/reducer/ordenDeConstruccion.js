import { types } from "../types";


export const ordenDeConstruccion = ( state = [], action ) => {

    switch (action.type) {
        case types.addOrden:
            return[
                ...state,
                action.payload.orden
            ]

        case types.buildOrdersLoad:           
            return[...action.payload.buildOrders]                     
    
        default:
            return state
    }
}