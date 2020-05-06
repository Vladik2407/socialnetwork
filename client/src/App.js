import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { Context } from "./context/app.context"
import { useAuth } from "./hooks/auth.hook"
import { AuthenticationPage } from './components/AuthenticationPage';
import {UserPage} from "./components/UserPage"

function App() {
  const { login, logout, token } = useAuth()
  const isAuth = !!token
  if (!isAuth) {
    return (
      <Context.Provider value={{ login }} >
        <AuthenticationPage />
      </Context.Provider>
    );
  }
  return (
    <Context.Provider value={{ logout }} >
      <UserPage />
    </Context.Provider>
  )
}

export default App;
