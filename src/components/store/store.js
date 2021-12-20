import { createStore, combineReducers, applyMiddleware } from "redux";

//middleware
import thunk from "redux-thunk";

//importación de componentes
import { authReducer } from "../reducer/authReducer";


//esto habilita las extensiones del devtools y tambien a poder 
//usar middlewares
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


//export const store = createStore(AuthReducer); se puede dejar de esta forma
//el problema que tendríamos es que solo deja usar un solo reducer nada más. 

//con esta función podemos mandar más de un reducer 

const reducers = combineReducers({
    auth: authReducer
})

//ahora una vez esto definido, tenemos que importarlo 
//en la mas alto de nuestra aplicación
//en este caso sería el JornalApp, importamos el store
export const store = createStore(
    reducers,
    //todo esto es para poder trabajar con acciones asincronas.
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );