import { types } from '../types'

export const loginWithEmailAndPassword = (uid, displayName) =>{
    
    return ( dispatch ) => {

        setTimeout(() => {
            
            dispatch(login(uid, displayName))

        },3500)
        
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});