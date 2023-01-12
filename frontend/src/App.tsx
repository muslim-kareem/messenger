import React, {useState} from 'react';
import './App.css';
import useUsers from "./hooks/useUsers";
import {Message} from "./model/Message";
import {createMessage} from "./api/Api";
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";
import useMessages from "./hooks/useMessages";
import {useParams} from "react-router-dom";
import MessageArea from "./components/MessageArea";
import {User} from "./model/User";

const messageToPostInitialState = {
    id: "",
    text: "",
    authorId: "",
    receiverId: "",
    createdAt: ""
}


function App() {

    let id = window.location.pathname.replace("/app/","")
    console.log("muslimsId",id)


    const[messageToPost,setMessageToPost] = useState<Message>(messageToPostInitialState)
    const [users] = useUsers([])
    const [messages,setMessages] = useMessages([]);


    const author = users && users.length && users.find(u =>  u.name === "User1")
    const receiver = users && users.length && users.find(u =>  u.id == id)


    if(!author ){
        return <div>error</div>
    }


    const contacts = users.filter(u => u.id !== author.id)


    function onChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        if(!author || !receiver)
            return
        setMessageToPost({
            ...messageToPostInitialState,
             [name]: value,
            authorId: author.id,
            receiverId: receiver.id
        })
    }

    function onSubmit ( event: React.FormEvent<HTMLFormElement> ){
        event.preventDefault()

        // you can't sed a message twas
        if(messageToPost.text !== "")
        createMessage(messageToPost)

        setMessages([...messages, messageToPost])
        setMessageToPost(messageToPostInitialState)

    }

  return (
      <>
        <NavBar user={author? author: null}/>

        <div className={"message-area-sidebar-container"}>

        <Contacts users={contacts}/>

            {receiver && <MessageArea receiverId={receiver.id} authorId={author.id}/>}

        </div>

          <div className={"message-input"}>
              <form onSubmit={onSubmit}>
                  <input name={"text"} type={"text"} value={messageToPost.text} onChange={onChange} />
                  <button type={"submit"}>send</button>
              </form>
          </div>

      </>
  );
}

export default App;

// const user2 = users && users.length && users.filter(u => u.name === "User2").map(u => <li key={u.id}>{u.name}</li>);

