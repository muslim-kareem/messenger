import React, {useState} from 'react';
import './App.css';
import useUsers from "./hooks/useUsers";
import {Message} from "./model/Message";
import {createMessage} from "./api/Api";
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";
import useMessages from "./hooks/useMessages";

const messageToPostInitialState = {
    id: "",
    text: "",
    authorId: "",
    receiverId: "",
    createdAt: ""
}


function App() {

    const[messageToPost,setMessageToPost] = useState<Message>(messageToPostInitialState)
    const [users] = useUsers([])
    const [messages,setMessages] = useMessages([]);

    console.log(messages)

    const user1 = users && users.length && users.find(u =>  u.name === "User1")
    const user2 = users && users.length && users.find(u =>  u.name === "User2")
    const constacts = users.filter(u => u.name !== "User1")

    function onChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        if(!user1 || !user2)
            return

        setMessageToPost({
            ...messageToPostInitialState,
             [name]: value,
            authorId: user1.id,
            receiverId: user2.id
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
        <NavBar user={user1? user1: null}/>

        <div className={"message-area-sidebar-container"}>
        <Contacts users={constacts}/>
        {/*<MessageArea user={user1? user1: null} messages={messages}/>*/}

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

