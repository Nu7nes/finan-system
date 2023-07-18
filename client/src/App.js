// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Header from './components/header/Header';
import SideBar from './components/SideBar';
import Pages from './components/pages/Pages';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { ThemeProvider, styled } from 'styled-components';
import { theme } from './components/styled/Theme.styed';

const Background = styled.div`
    width: 100%;
    height: 30vh;
    border-radius: 0 0 50px 50px;
    position: absolute;
    top: 0;
    z-index: -1;
    background-color: ${props => props.theme.colors.primary};
`

function App() {

  const sideBar = useSelector((state) => state.sidebar.open)

  return (
    <ThemeProvider theme={theme}>
        <Background />
        <Header />
        <Pages />
        {sideBar ? <SideBar /> : ''}

    </ThemeProvider>
  );
}

export default App;
