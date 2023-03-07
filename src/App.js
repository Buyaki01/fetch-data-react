import { useState, useEffect } from "react";
import AddForm from "./AddForm";
import Button from "./Button";
import TableList from "./TableList";

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
  
  return (
    <div className="App m-3">
      <Button 
        selected={selected}
        setSelected={setSelected}
        reqUrl={reqUrl}
        setReqUrl={setReqUrl}
      />

      <TableList
        items={items}
      />

      <AddForm/>

    </div>
  );
}

export default App;
