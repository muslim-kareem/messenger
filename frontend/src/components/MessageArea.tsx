import {Message} from "../model/Message";
import {User} from "../model/User";
import React, {useEffect, useRef} from "react";
import MessageCard from "./MessageCard";

export default function MessageArea({user, messages}:{
    user: User | null
    messages: Message[] | null
}){



    const messagesEndRef = useRef<null | HTMLDivElement>(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [messages]);


    return(
        <div className={"message-area"} >

            {messages?.map(m => <MessageCard key={m.id} message={m} isAuthor={user?.id === m.authorId}/>)}
            <div ref={messagesEndRef} />
        </div>
    )
}