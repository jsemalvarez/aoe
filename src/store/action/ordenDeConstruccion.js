import { db } from '../../firebase/firebase'
import { types } from '../types'


export const addNewBuildOrder = (buildorder) => {
    return async ( dispatch, getState ) => {       
        console.log(buildorder)
        const doc = await db.collection(`buildOrders`).add(buildorder)
        console.log(doc)
        
        //dispatch(addNewNote(doc.id, newNote))      
    }
}


export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,...note
    }
})


export const addOrden = (orden) => ({
    type: types.addOrden,
    payload: {
        orden
    }
});

export const loadingBuildOreders = ( uid ) => {   
    
    return async(dispatch) => {
        const snap = await db.collection( `buildOrders`).get()
        const buildOrders = []
        
        snap.forEach( snapHijo => {   
            buildOrders.push({
                id: snapHijo.id,
                ...snapHijo.data(),
            })        
        })

        dispatch( setbuildOreders( buildOrders ))
    }
}

export const setbuildOreders = (buildOrders) => ({
    type: types.buildOrdersLoad,
    payload: { buildOrders }
})