import {User} from "../model/User";
import React from "react";

export default function Contacts({users}:{
    users: User[] | null
}){


    return(
        <div className="sidebar">
            <h2>Contacts</h2>
            <ul>
                {users?.map(u => <div key={u.id}>{u.name}</div>)}
            </ul>
        </div>
    )
}