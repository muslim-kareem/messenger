import {User} from "../model/User";
import React from "react";

export default function UserSideBar({user}:{
    user: User | null
}){

/*
    <nav className="navbar">
        <div className="logo">ChatApp</div>
        <ul className="menu">
            <li><a href="#">{user? user.name: null }</a></li>
        </ul>
    </nav>

 */

    return(
        <>
            <div>
        <h3>{user? user.name: null }</h3>
            </div>
        </>
    )
}