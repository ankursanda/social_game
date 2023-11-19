import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [myName, setMyName] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/", {
        method: 'GET',
        mode: 'cors'
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        setMyName(jsonResponse.name);
      } else {
        console.log("Failed to gain access to the API address");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once, like componentDidMount

  return (
    <div className="App">
      <h1>Hello World, my name is {myName}</h1>
    </div>
  );
}

export default App;
