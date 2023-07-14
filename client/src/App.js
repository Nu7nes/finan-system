// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Header from './components/header/Header';
import SideBar from './components/SideBar';
import Pages from './components/pages/Pages';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'


function App() {

  // const [sideBar, setSideBar] = useState(false);
  const sideBar = useSelector((state) => state.sidebar.open)
  // console.log(sideBar);
  //   function handleSideBar() {
  //       let state = !sideBar;
  //       setSideBar(state)
  //   }
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
      <Pages />
      {sideBar ? <SideBar /> : ''}

    </div>
  );
}

export default App;
