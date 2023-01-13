import {User} from "../model/User";
import React from "react";

export default function Contacts({users,authorId}:{
    authorId: string
    users: User[] | null
}){


    return(
        <div className="sidebar">
            <h2>Contacts</h2>
            <ul>
                {users?.map(u => <a href={"/home/"+ (authorId + " "+ u.id)} key={u.id}><div  key={u.id}>{u.name}</div></a>)}
            </ul>
        </div>
    )
}