import React from 'react';
import './App.css';
import useUsers from "./hocks/useUsers";




function App() {

    const [users] = useUsers([])

    const user1 = users && users.length && users.find(u =>  u.name === "User1")
    const user2 = users && users.length && users.find(u =>  u.name === "User2")


    let x = ""
    function onChange(event: React.ChangeEvent<HTMLInputElement>){
        x = event.target.value;
    }

  return (
      <>
        <nav className="navbar">
          <div className="logo">ChatApp</div>
          <ul className="menu">
            <li><a href="#">{user1 ? user1.name: null}</a></li>
          </ul>
        </nav>

        <div className={"message-area-sidebar-container"}>

        <div className="sidebar">
          <h2>Contacts</h2>
          <ul>
              {user2? user2.name : null}
          </ul>
        </div>

          <div className={"message-area"} >
              <h2>Messages</h2>

          </div>
        </div>

          <form>
              <input onChange={onChange} />
              <button type={"submit"}>send</button>
          </form>
      </>
  );
}

export default App;

// const user2 = users && users.length && users.filter(u => u.name === "User2").map(u => <li key={u.id}>{u.name}</li>);

