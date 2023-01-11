import {User} from "../model/User";
import React from "react";

export default function NavBar({user}:{
    user: User | null
}){


    return(
            <nav className="navbar">
                <div className="logo">ChatApp</div>
                <ul className="menu">
                    <li><a href="#">{user? user.name: null }</a></li>
                </ul>
            </nav>
    )
}