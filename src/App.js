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
    <div className="App m-3">
      <Button 
        selected={selected}
        setSelected={setSelected}
        reqUrl={reqUrl}
        setReqUrl={setReqUrl}
      />

      <table className='p-3 border-2 border-solid border-black-500'>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              {Object.entries(item).map(([key, value]) => {
                return(
                  <td className='p-3 border-2 border-solid border-black-500'>{JSON.stringify(value)}</td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
