import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { Context } from "./context/app.context"
import { useAuth } from "./hooks/auth.hook"
import { useRoutes } from "./routes/routes"
import { BrowserRouter as Router } from "react-router-dom"
import {Navbar} from "./components/Navbar"

function App() {
  const { login, logout, token } = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)

  return (
    <Context.Provider value={{login, logout,token}}>
    <Router>
      <div>
        <Navbar/>
        {routes}
      </div>
    </Router>
    </Context.Provider>
  )
}

export default App;
