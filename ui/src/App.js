import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import './App.css';

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route path="/home">

                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
