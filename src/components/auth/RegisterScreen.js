import React from 'react';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { removeError, setError } from '../actions/ui';



export const RegisterScreen = () => {

    const dispatch = useDispatch();

    //con esto nos ayudará a extrer el mensaje. Otro hook que trea redux
    const { msgError } = useSelector(state => state.uid);
    //console.log(msgError)



    const [formValues, handleInputChange] = useForm({
        name: 'Kevin Villeda',
        email: 'prueba@gmail',
        password: 12345,
        password2: 12345,

    });

    const { name, email, password, password2 } = formValues;



    //función que usaremos para realizar, importante siempre capturar el evento.
    const handleRegister = (e) => {
        e.preventDefault();
        //esto lo haremos para validar si nos envía todo correctamente.
        // console.log(name, email, password, password2)

        if (isFormValid()) {
            console.log('Formulario correcto')
        }
    }

    //función para validar si los datos ingresados son correctos
    const isFormValid = () => {

        if (name.trim().length == 0) {
            dispatch(setError('El nombre es requerido.'));
            return false;
            //para la validación de email, instalaremos 
            //validator 

            //acá decimos que si !validator es diferente a email, 
            //ya que si lo dejamos sin el !, nos dará un true.
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Error, correo no valido'));

            return false
        } else if (password !== password2 || password.length < 8) {
            dispatch(setError('Contraseña pequeña o no compatible'));

            return false;
        }
        dispatch(removeError())
        return true;
    }//end isFormValid


    return (
        <>
            <h3 className='auth__title'>Registrarse</h3>
            <form onSubmit={handleRegister}>

                {/**mensaje para mostrar validación correcta */}
                { msgError &&
                    (<div className='auth__alert-error'>
                            {msgError}
                    </div>)

                }



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