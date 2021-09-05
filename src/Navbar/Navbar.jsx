import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import rickyandmorty from "./../images/rickyandmorty.png";
const Navbar = () => {
    return (
        <nav className={s.topMenu}>
            <span className={s.navbarLogo}><img src={rickyandmorty}/></span>
            <ul className={s.menuMain}>
                <li><NavLink  to="/characters">Characters</NavLink></li>
                <li><NavLink  to="/episodes">Episodes</NavLink></li>
                <li><NavLink  to="/locations">Locations</NavLink></li>
                <li><NavLink  to="/watchList">My watch list</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;