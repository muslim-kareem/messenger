
import React, {useEffect, useRef} from "react";
import MessageCard from "./MessageCard";
import useUsers from "../hooks/useUsers";
import useChatMessages from "../hooks/useChatMessages";

export default function MessageArea({authorId,receiverId}:{
    authorId: string
    receiverId: string
}){

    const [users] = useUsers([])

    const author = users && users.length && users.find(u =>  u.id === authorId)
    const receiver = users && users.length && users.find(u =>  u.name === receiverId)

    if(!author || !receiver){
        return <div>No Author or Receiver </div>
    }

    const [chatMessages] = useChatMessages(author.id+" "+receiver.id)



    const messagesEndRef = useRef<null | HTMLDivElement>(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [chatMessages]);


    return(
        <div className={"message-area"} >
            {chatMessages?.map(m => <MessageCard key={m.id} message={m} isAuthor={author?.id === m.authorId}/>)}
            <div ref={messagesEndRef} />
        </div>
    )
}