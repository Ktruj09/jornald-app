import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducer/authReducer";


//export const store = createStore(AuthReducer); se puede dejar de esta forma
//el problema que tendríamos es que solo deja usar un solo reducer nada más. 

//con esta función podemos mandar más de un reducer 

const reducers = combineReducers({
    auth: authReducer
})

//ahora una vez esto definido, tenemos que importarlo 
//en la mas alto de nuestra aplicación
//en este caso sería el JornalApp, importamos el store
export const store = createStore(reducers);