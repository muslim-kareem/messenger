import {User} from "../model/User";
import React from "react";

export default function Contacts({users,authorId}:{
    authorId: string
    users: User[] | null
}){

    /*
    <div className="sidebar">
        <h3>Contacts</h3>
        <ul>
            {users?.map(u => <a href={"/chatroom/"+ (authorId + " "+ u.id)} key={u.id}><div  key={u.id}>{u.name}</div></a>)}
        </ul>
    </div>

     */
    return(
      <>

      </>
    )
}