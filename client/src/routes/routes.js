import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"


import { Register } from "../components/Authentication/Register"
import { Login } from "../components/Authentication/Login";

export const useRoutes = isAuth => {

    if (isAuth) {
        return (
            <Switch>
                <Route path="user-page">
                    <div>Hello</div>
                    
                </Route>
                <Redirect to="/user-page" />
            </Switch>
        )
    }

return (
    <Switch>
        <Route path="/register">
            <Register/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
    </Switch>
)
}