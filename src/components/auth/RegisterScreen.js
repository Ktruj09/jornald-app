import React from 'react';
import { Link } from 'react-router-dom';


export const RegisterScreen = () => {

    return (
        <>
            <h3 className='auth__title'>Registrarse</h3>
            <form>
                <input
                    type="text"
                    placeholder='Nombre'
                    name="name"
                    className='auth__input'
                    autoComplete='off'

                />

                <input
                    type="text"
                    placeholder='Correo Electrónico'
                    name="email"
                    className='auth__input'
                    autoComplete='off'

                />

                <input
                    type="password"
                    placeholder='Contraseña'
                    name="password"
                    className='auth__input'

                />

                <input
                    type="password"
                    placeholder='Confirmar contraseña'
                    name="password2"
                    className='auth__input'

                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'

                >
                    Registrarse
                </button>



                <Link
                    to="/auth/login"
                    className='link '

                >
                    ¿Ya te has registrado?
                </Link>

            </form>
        </>
    )
};