import React from 'react';


export const Sidebar = () => {
    return (
        <>
            <aside className='journal__sidebar'>
                <div className='journal__sidebar-navbar'>
                    <h3 className='mt-5'>
                        {/**Para utilizar los iconos, ingresamos a la siguiente página
                         * 
                         * https://cdnjs.com/libraries/font-awesome
                         * 
                         * copiamos el css que es el 
                         * https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css
                         * y esto fue importado en el index.html que se encuentra en la carpeta pública
                         */}
                        <i className='far fa-user'></i>
                        <span> Kevin Villeda</span>
                    </h3>

                    <button className='btn'>
                        Cerrar Sesión
                    </button>
                </div>

                <div className='journal__new-entry'>
                         <i className='far fa-calendar-plus fa-5x'></i>
                         <p  className='mt-5'>
                              Nueva Entrada
                         </p>
                </div>
            </aside>
        </>
    )
}