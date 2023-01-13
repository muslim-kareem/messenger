import React from 'react';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import LoginPage from "./components/LoginPage";




function App() {



  return (
      <>

      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<LoginPage/>} />
              <Route path={"/chatroom/:author_receiverId"} element={<ChatRoom/>} />
              <Route path={"/home/:username"} element={<Home/>} />
          </Routes>
      </BrowserRouter>


</>
  );
}

export default App;

// const user2 = users && users.length && users.filter(u => u.name === "User2").map(u => <li key={u.id}>{u.name}</li>);

