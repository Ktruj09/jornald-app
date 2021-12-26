
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth'

import {  googleProvider} from '../../firebase/firabese-config'
import { types } from '../types/types'


//definimos una función asincrona
export const startLogin = (email, password) => {

    //esta función regresa un callback
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Pedro'));
        }, 3500)
    }

}


//función que servirá para el registro del usuario
export const StartRegister = (email, password, name) =>{

    return (dispatch) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password, name)
            .then(async ({user}) =>{
                //acá asignamos el name a nuestro display name.
                await updateProfile(auth.currentUser, {displayName: name})
              console.log(user)
                dispatch(
                    login(user.uid, user.displayName)
                )
            })

            .catch((err) =>console.error(err))
    }

}


//inicio de sesión con google
export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
    }
}


export const login = (uid, displayName) => {
    //lo que decimos acá, es que dentro de esta función
    //regresara este objeto con todas las especificaciones
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}