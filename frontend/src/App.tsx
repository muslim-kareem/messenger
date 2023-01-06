import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

type User = {
  id: string,
  name: string
}

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
      <>
        <nav className="navbar">
          <div className="logo">My App</div>
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li>{users[0].name}</li>
          </ul>
        </div>
      </>
  );
}

export default App;
