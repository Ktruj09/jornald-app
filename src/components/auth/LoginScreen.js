import React from 'react';
import {useDispatch} from 'react-redux'

import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { startGoogleLogin, startLogin} from '../actions/auth'


export const LoginScreen = () => {

    //para poder hacer el Dispatch, react-redux ya nos ofrece 
    //un dispatch, esto es un hook que react-redux ofrece
    
    //acá hacemos dispatch de acciones
    const dispatch =useDispatch();


    const [formValues, handleInputChange] = useForm({
        email: 'kevinprueba@gmail.com',
        password: 1234567,
    });


    //extraemos los valores, los llamaremos por values con 
    //dentro de los input
    //ejemplo <input value={email}/>
    const {email, password} = formValues;


    //función que usaremos para realizar, importante siempre capturar el evento.
    const handleLogin = (e) =>{
        e.preventDefault();
        //esto lo haremos para validar si nos envía todo correctamente.
        //console.log(email, password)
        dispatch(startLogin(email, password));
    }

    //nueva función inicio de sesión con google
    const handleGoogleLogin = () =>{
        dispatch(startGoogleLogin())
    }

    return (
        <>
            <h3 className='auth__title'>Iniciar sesión</h3>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder='Correo Electrónico'
                    name="email"
                    className='auth__input'
                    autoComplete='off'
                     
                    value={email}
                    onChange={handleInputChange}

                />

                <input
                    type="password"
                    placeholder='Contraseña'
                    name="password"
                    className='auth__input'
                    value={password}
                    onChange={handleInputChange}

                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    

                >
                    Ingresar
                </button>
                <hr />

                <div className='auth__social-networks'>
                    <p>Iniciar sesión con redes sociales</p>

                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className='link'

                >
                    Crear nueva cuenta 
                </Link>

            </form>

        </>
    )
}