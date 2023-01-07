import React, {useState} from 'react';
import './App.css';
import useUsers from "./hocks/useUsers";
import {Message} from "./model/Message";
import {createMessage} from "./api/Api";

const initialState = {
    id: "xx",
    text: "",
    authorId: "",
    receiverId: "",
    createdAt: ""
}


function App() {

    const[messageToPost,setMessageToPost] = useState<Message>(initialState)
    const [users] = useUsers([])

    const user1 = users && users.length && users.find(u =>  u.name === "User1")
    const user2 = users && users.length && users.find(u =>  u.name === "User2")


    function onChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        if(!user1 || !user2)
            return

        setMessageToPost({
            ...initialState,
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

        setMessageToPost(initialState)

    }

  return (
      <>
        <nav className="navbar">
          <div className="logo">ChatApp</div>
          <ul className="menu">
            <li><a href="#">{user1 ? user1.name: null }</a></li>
          </ul>
        </nav>

        <div className={"message-area-sidebar-container"}>
        <div className="sidebar">
          <h2>Contacts</h2>
          <ul>
              {user2 ? user2.name : null}
          </ul>
        </div>

          <div className={"message-area"} >
              <h2>Messages</h2>

          </div>
        </div>

          <div className={"message-input"}>
              <form onSubmit={onSubmit}>
                  <input name={"text"} type={"text"} onChange={onChange} />
                  <button type={"submit"}>send</button>
              </form>
          </div>


      </>
  );
}

export default App;

// const user2 = users && users.length && users.filter(u => u.name === "User2").map(u => <li key={u.id}>{u.name}</li>);

