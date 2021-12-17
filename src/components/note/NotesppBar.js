import React from 'react';

export const NotesppBar = () =>{
    return(
    //este es el que contendrá los items de entradas. 
    <> 
        <div className='notes__appbar'>
            <span>28 de Agosto 2021</span>

            <div>
                <button className='btn'>
                    Imagen
                </button>

                <button className='btn'>
                    Guardar
                </button>
            </div>
        </div>
    </>)
}