import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';


export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: 'Kevin Villeda',
        email: 'prueba@gmail',
        password: 12345,
        password2: 12345,

    });

    const {name, email, password, password2}= formValues;

        //función que usaremos para realizar, importante siempre capturar el evento.
        const handleRegister = (e) =>{
            e.preventDefault();
            //esto lo haremos para validar si nos envía todo correctamente.
            console.log(name, email, password, password2)
        }

    return (
        <>
            <h3 className='auth__title'>Registrarse</h3>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder='Nombre'
                    name="name"
                    className='auth__input'
                    autoComplete='off'

                    value={name}
                    onChange={handleInputChange}

                />

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

                <input
                    type="password"
                    placeholder='Confirmar contraseña'
                    name="password2"
                    className='auth__input'

                    value={password2}
                    onChange={handleInputChange}

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