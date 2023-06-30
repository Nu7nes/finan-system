// import logo from './logo.svg';
import './App.css';
// import React, { useEffect, useState } from 'react'
import Header from './components/header/Header';

function App() {

  // const [test, setTest] = useState('')

  // useEffect(() => {
  //   fetch('/time').then(res => res.json()).then(json => {

  //     let data = new Date(parseInt(json))
  //     console.log(data);
  //     setTest(data.toString())
  //   })
  // }, [])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
