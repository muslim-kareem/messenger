
import React, {useEffect, useRef, useState} from "react";
import MessageCard from "./MessageCard";
import useUsers from "../hooks/useUsers";
import {useParams} from "react-router-dom";
import useChatMessages from "../hooks/useChatMessages";
import NavBar from "./NavBar";
import {createMessage} from "../api/Api";
import {Message} from "../model/Message";


const messageToPostInitialState = {
    id: "",
    text: "",
    authorId: "",
    receiverId: "",
    createdAt: ""
}



export default function ChatRoom(){

    let {author_receiverId} = useParams();

    let authorId = author_receiverId?.substring(0,author_receiverId?.indexOf(" ")).trim();
    let receiverId  = author_receiverId?.substring(author_receiverId?.indexOf(" ")).trim();

    console.log(authorId)
    console.log(receiverId)

    const [users] = useUsers([])

    const author = users && users.length && users.find(u =>  u.id === authorId)
    const receiver = users && users.length && users.find(u =>  u.id === receiverId)


    const [chatMessages,setChatMessages] = useChatMessages(authorId+" "+receiverId)

    const[messageToPost,setMessageToPost] = useState<Message>(messageToPostInitialState)



    function onSubmit ( event: React.FormEvent<HTMLFormElement> ){
        event.preventDefault()
        // you can't sed a message twas
        if(messageToPost.text !== "")
            createMessage(messageToPost)

         setChatMessages([...chatMessages, messageToPost])
         setMessageToPost(messageToPostInitialState)
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;


        setMessageToPost({
            ...messageToPostInitialState,
            [name]: value,
            authorId: authorId as string,
            receiverId: receiverId as string
        })
    }

    const messagesEndRef = useRef<null | HTMLDivElement>(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [chatMessages]);

    return(
        <>

        <NavBar user={author? author: null}/>
            <div>{receiver && receiver.name}</div>


        <div className={"message-area"} >
            {chatMessages?.map(m => <MessageCard key={m.id} message={m} isAuthor={authorId === m.authorId}/>)}
            <div ref={messagesEndRef} />
        </div>


        <div className={"message-input"}>
            <form onSubmit={onSubmit}>
                <input name={"text"} type={"text"} value={messageToPost.text} onChange={onChange} />
                <button type={"submit"}>send</button>
            </form>
        </div>

        </>
    )
}