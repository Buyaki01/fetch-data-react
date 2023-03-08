import { useState, useEffect } from "react";
import AddForm from "./AddForm";
import Button from "./Button";
import TableList from "./TableList";

function App() {
  const [reqUrl, setReqUrl] = useState('users')
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState('Users')
  const API_URL = 'http://jsonplaceholder.typicode.com/'
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [street, setStreet] = useState('')
  const [suite, setSuite] = useState('')
  const [city, setCity] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [catchPhrase, setCatchPhrase] = useState('')
  const [bs, setBs] = useState('')

  const sendDataToAPI = async (data) => {
    const response = await fetch ("http://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: items[items.length - 1].id + 1,
      name,
      userName,
      email,
      phone,
      website,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          lat,
          lng
        }
      }
    };
    sendDataToAPI(data);
  }

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

      <AddForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        username={userName}
        setUsername={setUserName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        website={website}
        setWebsite={setWebsite}
        street={street}
        setStreet={setStreet}
        suite={suite}
        setSuite={setSuite}
        city={city}
        setCity={setCity}
        zipcode={zipcode}
        setZipcode={setZipcode}
        lat={lat}
        setLat={setLat}
        lng={lng}
        setLng={setLng}
        companyName={companyName}
        setCompanyName={setCompanyName}
        catchPhrase={catchPhrase}
        setCatchPhrase={setCatchPhrase}
        bs={bs}
        setBs={setBs}
      />

    </div>
  );
}

export default App;
