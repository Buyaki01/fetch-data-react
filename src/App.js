import { useState, useEffect } from "react";
import Button from "./Button";

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
    <div className="App">
      <Button 
        selected={selected}
        setSelected={setSelected}
        reqUrl={reqUrl}
        setReqUrl={setReqUrl}
      />

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
