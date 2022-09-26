import { createContext } from "react";

export const AuthContext = createContext(/* si estuviesimos en TS, pondriamos un argumento con el tipo "any", en este caso no importa, la información la va proveer el AuthProvider */);