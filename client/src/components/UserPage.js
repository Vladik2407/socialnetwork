import React, {useContext} from "react"
import { Context } from "../context/app.context"
import {Route, BrowserRouter as Router} from "react-router-dom"

export const UserPage = (props) => {
    const auth = useContext(Context)
    return (
        <Router>
            <Route path="/userpage">
        <input type="button" onClick={auth.logout}/>
            </Route>
        </Router>
    )
}