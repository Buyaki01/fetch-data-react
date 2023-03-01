import { useEffect } from "react";

const Users = ({USERS_URL, users, setUsers}) => {
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const response = await fetch(USERS_URL)
        if (!response.ok) throw Error('Not yet received the data')
        const data = await response.json()
        setUsers(data)
      }catch(err){
        console.log(err.stack)
      }
    }

    fetchUsers();
  }, [])

  return(
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {JSON.stringify(user)}
        </li>
      ))}
    </ul>
  )
}

export default Users;