import {User} from "../model/User";
import React from "react";

export default function Contacts({users,authorId}:{
    authorId: string
    users: User[] | null
}){




    return(
        <>
            {users?.map(u => (
                <div className="user-container" key={u.id}>
                    <a href={"/chatroom/"+ (authorId + " "+ u.id)}>
                        <div>{u.name}</div>
                    </a>
                </div>
            ))}
        </>


    )
}