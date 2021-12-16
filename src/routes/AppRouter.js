//este documento es el sistema de rutas principal

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//importamos componentes
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'

export const AppRouter = () => {

    return (
        <>
            
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<JournalScreen />} />
                        <Route path="/*" element={<AuthRouter />} />
                        {/**Si el usario coloca una ruta mala, lo llevará a nuestra screen Login */}
                        <Route path="*" element={<Navigate to="/auth/login" />} />
                    </Routes>

                </BrowserRouter>
            
        </>
    )

};
