import React from 'react';
import './App.css';
import useUsers from "./hocks/useUsers";




function App() {

    const [users,setUsers] = useUsers([])

    console.log("App, "+users)
    //
    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.get<User[]>('/api/users');
    //         setUsers(response.data)
    //     })();
    // }, []);
    //
    //    console.log(users)


  return (
      <>
        <nav className="navbar">
          <div className="logo">ChatApp</div>
          <ul className="menu">
            <li><a href="#">Home</a></li>
          </ul>
        </nav>

        <div className="sidebar">
          <h2>Sidebar</h2>
          <ul>
            {users && users.length && users.filter(u => u.name !== "User2").map(u => <li key={u.id}>{u.id} {u.name}</li>)}
          </ul>
        </div>
      </>
  );
}

export default App;
