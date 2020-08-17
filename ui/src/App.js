import React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import './App.css';

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Dashboard/>
                <Header/>
            </div>
        );
    }
}

export default App;
