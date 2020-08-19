import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import MainBox from "./components/sign/mainBox";

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/dashboard">
                            <Header/>
                            <Dashboard/>
                        </Route>
                        <Route path="/sign-in">
                            <MainBox children={<SignIn/>}/>
                        </Route>
                        <Route path="/sign-up">
                            <MainBox children={<SignUp/>}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
