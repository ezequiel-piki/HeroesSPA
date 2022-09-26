import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'


//En este punto de mi aplicacòn como es un punto muy alto, puedo usar mi AuthProvider
const HeroesApp = () => {
  return (
    <AuthProvider>
    <AppRouter/>
    </AuthProvider>
  )
}

export default HeroesApp