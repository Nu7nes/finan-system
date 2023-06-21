import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [test, setTest] = useState('')

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(json => {

      let data = new Date(parseInt(json))
      console.log(data);
      setTest(data.toString())
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {test}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
