import React from 'react';
import { NoteScreen } from '../note/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';


export const JournalScreen = () =>{

    return(
        <>
            <div className='journal__main-content'>

                <Sidebar/>

                <main>
                    {/**este componente será mostrado, si el usuario no tiene 
                     * nada seleccionado.
                     */}
                  {/** <NothingSelected/>*/}  

                 <NoteScreen/>


                </main>
            </div>
        </>
    )
};