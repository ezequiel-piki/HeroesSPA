import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import {authReducer} from './authReducer'
//HIGH ORDER COMPONENT o COMPONENTE PADRE
//AuthProvider utiliza el AuthContext, con el objetivo de que este sea el componente que sirve para proveer la informaciòn a toda la App

const initialState = {
    logged:false,
}

//Nuestro AuthProvider deberia ser visto por toda la APP
export const AuthProvider = ({children}/* es decir todos los componentes hijos */) => {
 
    const [ estado, despacho ] = useReducer(authReducer, initialState);
 
    return (
    <AuthContext.Provider value={{/* objeto vacio */}}>
    
     {children}
    
    </AuthContext.Provider>
  )
}
