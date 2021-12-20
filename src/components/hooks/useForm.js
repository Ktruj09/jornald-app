import { useState } from 'react';

//este hook se usa para manejar formularios, esto lo usaremos en el loginScreen.js
//lo definimos que será un objeto vacio
export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }


    const handleInputChange = ({ target }) => {
        //establecemos el objeto
        setValues({
            ...values,
            [target.name]: target.value
        });

    }
    //primer valor sería retornar los valores ingresados por el form
    //segundo hacemos llamado al handeInputchange 
    return [values, handleInputChange, reset];

}