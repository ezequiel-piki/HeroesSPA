import { types } from '../types/types'
//Creamos una funciòn que va ser la encargada de manejar los estados

//el argumento "action" usualmente tiene 2 propiedades "type" y "payload", no necesariamente el payload, pero el type siempre lo tiene
export const authReducer = (state = {}, action) => {

    //Lo manejamos con un switch por si en un futuro queremos agregar màs acciones

    switch (action.type) {
        case types.login:
            return {
                /* Siempre es util hacer una desestructuracion del "state" anterior, y reemplazados lo qe realmente nos interesa, por ejemplo podriamos tener una config en nuestro estado qe no queremos perder, entonces de esta forma nos evitamos modificarlo el dia de mañana */
                ...state,
                logged: true,
                name: action.payload
            };
            break;
        case types.logout:
            return {
                logged: false,

            };
            break;

        default:
            return state;
    }
}