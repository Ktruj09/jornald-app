//importación de componentes
import { types } from '../types/types'
//esto es una función pura, el cual reciben dos parametros
//state y action. En este caso el State sera definido como un objeto  vacio 

/**
 * Demostración de que queremos que haga 
 * el state va estar vacio cuando el usuario no esta autenticado {}
 * si el usuario esta autenticado, lo que se mostrará será lo siguiente: 
 *           {
 *               uid: 1234566,
 *               name: 'Kevin Villeda'
 *           } 
 *  
 */

export const authReducer = (state = {}, action) => {

    switch(action.type){
        case types.login: 
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {  }

            //por defecto mostrará si no hace ninguna de las dos opciones 
            //ya definidas, mostrará el state que es un objeto vacio
        default:
            return state;

    }
} 