import React from 'react';
//importamos un modulo de react-redux
import { Provider } from 'react-redux'
import { store } from './components/store/store';


//insertamos componentes 
import { AppRouter } from './routes/AppRouter'


export const JournalApp = () => {
    return (
        <>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </>
    )
}