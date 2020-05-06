import React from "react"
import { Navbar } from "./Authentication/Navbar"
import { Register } from "./Authentication/Register"
import { Login } from "./Authentication/Login"
import { Route, BrowserRouter as Browser } from "react-router-dom"

export const AuthenticationPage = (props) => {
    return (
        <Browser>
            <Navbar />
            <Route path="/register" exact>
                <Register />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
        </Browser>
    )
}