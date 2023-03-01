import { useState } from "react";
import Users from "./Users";

function App() {
  const USERS_URL = 'http://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <Users
        USERS_URL={USERS_URL}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}

export default App;
