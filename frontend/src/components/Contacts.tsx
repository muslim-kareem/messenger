import {User} from "../model/User";
import React from "react";

export default function Contacts({users,authorId}:{
    authorId: string
    users: User[] | null
}){

    /*

     */
    return(
      <>
          <div className={"contacts-container"}>
                  {users?.map(u => <a href={"/chatroom/"+ (authorId + " "+ u.id)} key={u.id}>
                      <div key={u.id}>{u.name}</div>
                  </a>)}
          </div>

      </>
    )
}