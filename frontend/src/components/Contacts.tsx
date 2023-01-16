import {User} from "../model/User";
import React from "react";

export default function Contacts({users,authorId}:{
    authorId: string
    users: User[] | null
}){




    return(
        <>
            {users?.map(u => (

                    <a href={"/chatroom/"+ (authorId + " "+ u.id)}>
                        <div className="user-container" key={u.id}>
                        <div>{u.name}</div>
                        </div>
                    </a>

            ))}
        </>


    )
}