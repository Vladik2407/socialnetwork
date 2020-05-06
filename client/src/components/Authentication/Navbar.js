import React from "react"
import {NavLink} from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink to="/register" className="brand-logo">Logo</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/register" >Регистрация</NavLink></li>
                    <li><NavLink to="/login">Вход</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}