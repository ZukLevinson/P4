import React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/header/Header";
import './App.css';

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Header/>
            </div>
        );
    }
}

export default App;
