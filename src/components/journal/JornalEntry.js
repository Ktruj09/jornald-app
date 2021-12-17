import React from 'react';

export const JornalEntry = () => {
    return (
        <>
            {/**el objetivo de este componente es que nos muestro el item de las últimas entradas
             * creadas 
             */}
            {/**Este div será para el contenedor de Imagen */}
            <div className='journal__entry'>
                <div
                    className='jornal__entry-picture'
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: 'url(https://d2f7anuvnar8n5.cloudfront.net/p/assets/animations/hurricane_1e8e060c71635d9c72b776820991d419.png)'

                    }}
                >
                </div>

                {/**Este div será para el contenedor de texto o descripción*/}
                <div className='jornal__entry-body'>
                    <p className='jornal__entry-title'>Un nuevo Día </p>
                    <p className='jornal__entry-content'> 
                    Lorem Ipsum is simply dummy 
                    </p>
                </div>
                
                {/**Este otro div será para la fecha */}
                <div className='journal__entry-date'>
                    <span>Lunes</span>
                    <h4>28</h4>
                </div>
            </div>

        </>
    )
}