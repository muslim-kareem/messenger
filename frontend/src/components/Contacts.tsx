import {User} from "../model/User";
import React from "react";
import {Link} from "react-router-dom";

export default function Contacts({users}:{

    users: User[] | null
}){


    return(
        <div className="sidebar">
            <h2>Contacts</h2>
            <ul>
                {users?.map(u => <Link to={"/messageareapage/"+u.id}><div  key={u.id}>{u.name}</div></Link>)}
            </ul>
        </div>
    )
}