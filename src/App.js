import { useState } from "react";
import Button from "./Button";
import Users from "./Users";
import Posts from "./Posts";

function App() {
  const USERS_URL = 'http://jsonplaceholder.typicode.com/users'
  const POSTS_URL = 'http://jsonplaceholder.typicode.com/posts'
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [selected, setSelected] = useState('Users')

  const handleButtonClick = (event) => {
    setSelected(event.target.textContent);
  }


  return (
    <div className="App">
      <Button 
        onClick={handleButtonClick}
        selected={selected}
      />

      {selected === 'Users' ? (
        <Users
          USERS_URL={USERS_URL}
          users={users}
          setUsers={setUsers}
        />
      ) : (
        <Posts
          POSTS_URL={POSTS_URL}
          posts={posts}
          setPosts={setPosts}
        />
      )}
    </div>
  );
}

export default App;
