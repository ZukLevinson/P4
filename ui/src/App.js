import React from 'react';

import Menu from "./components/Main Menu/Menu";

import './App.css';

function App() {
  return (
    <div style={mainStyle}>
        <Menu/>
    </div>
  );
}

const mainStyle={
    width:'100vw',
    height:'100vh',
    background:'#F3F3F3',
    display:'flex'
}

export default App;
