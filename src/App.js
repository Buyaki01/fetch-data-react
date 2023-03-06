import { useState, useEffect } from "react";
import Button from "./Button";
import UserTable from "./UserTable";
import PostTable from "./PostTable";
import CommentTable from "./CommentTable";

function App() {
  const [reqUrl, setReqUrl] = useState('users')
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState('Users')
  const API_URL = 'http://jsonplaceholder.typicode.com/'
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`${API_URL}${reqUrl}`)
        const data = await response.json()
        setItems(data)
      }catch(err){
        console.log(err)
      }
    }

    fetchData();
  }, [reqUrl])

  const renderTable = () => {
    if (selected === 'Users') {
      return <UserTable items={items} />;
    } else if (selected === 'Posts') {
      return <PostTable items={items} />;
    } else if (selected === 'Comments') {
      return <CommentTable items={items} />;
    }
  }
  
  return (
    <div className="App m-3">
      <Button 
        selected={selected}
        setSelected={setSelected}
        reqUrl={reqUrl}
        setReqUrl={setReqUrl}
      />

      {renderTable()}
    </div>
  );
}

export default App;
