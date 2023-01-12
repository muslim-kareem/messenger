import {Message} from "../model/Message";
import {User} from "../model/User";
import React from "react";
import MessageCard from "./MessageCard";

export default function MessageArea({user, messages}:{
    user: User | null
    messages: Message[] | null
}){

    return(
        <div className={"message-area"} >

            {messages?.map(m => <MessageCard message={m} isAuthor={user?.id === m.authorId}/>)}
        </div>
    )
}