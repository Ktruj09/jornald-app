import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";


//importamos componentes
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {

    return (
        <>

            <div className='auth__main'>
                <div className='auth__box-container'>
                    <Routes>
                        <Route path="/auth/login" element={<LoginScreen />} />
                        <Route path="/auth/register" element={<RegisterScreen />} />
                        {/**Si el usario coloca una ruta mala, lo llevará a nuestra screen Login */}
                        <Route path="*" element={<Navigate to="/auth/login" />} />

                    </Routes>
                </div>
            </div>


        </>
    )

};
