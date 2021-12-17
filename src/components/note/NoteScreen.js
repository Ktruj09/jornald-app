import React from 'react';
import { NotesppBar } from './NotesppBar';

export const NoteScreen = () => {
    return (
        <>
            <div className='note__main-content'>
                <NotesppBar />

                {/**este será el agrupador del formulario */}
                <div className='notes__content'>
                    <input
                        type="text"
                        placeholder='Escribe el título'
                        className='notes_title-input'
                    />

                    <textarea
                        placeholder='¿Qué paso hoy?'
                        className='notes__textearea'
                    >
                    </textarea>

                    {/**Contenedor de la imagen que vamos a subir */}
                    <div className='notes__image'> 
                        <img
                            src="https://i.etsystatic.com/25594439/d/il/dbbe93/2693967973/il_340x270.2693967973_mdq7.jpg?version=0"
                            alt="Imagen"
                       />
                    </div>
                </div>
            </div>
        </>
    )
};