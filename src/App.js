import { useState } from "react";
import Button from "./Button";
import Users from "./Users";

function App() {
  const USERS_URL = 'http://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <Button/>
      <Users
        USERS_URL={USERS_URL}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}

export default App;
