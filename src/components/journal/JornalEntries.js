import React from 'react';
import { JornalEntry } from './JornalEntry';


export const JornalEntries = () => {

    //esto más adelante será conectado para sacar los datos que estan almacenados en una BD
    //por el momento hemos realizado esto de prueba, para que nos muestro 5 tareas almacenadas. 
    const entries = [1, 2, 3, 4, 5];
    return (
        <>
       
            <div className='jornal__entries pointer'>
                {
                    //con esto hacemos extracción y recorrido para que sea mostrado los 6 valores almecenados de pruebas
                    entries.map(value => (
                        <JornalEntry key={value} />
                    ))
                }
            </div>
        </>

    )
} 