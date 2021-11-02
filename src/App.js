import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'


function App() {

  const [poki,setPoki] = useState([])
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(res=>{res.json()
      .then(data=>{setPoki(data.results)
      })
    })
    .catch(err=>{console.log(err)})
  },[])
  const [showPoki, setshowPoki] = useState(false)


  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokeapi</h1>
        <button onClick={()=>setshowPoki(true)}>Fetch Pokemon</button>
      </header>
      <br></br>
      <ul>
        {showPoki && poki.map((pokemon)=>{
          return <li>{pokemon.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
