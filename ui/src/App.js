import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import MainBox from "./components/sign/mainBox";

import './App.css';
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: '',
            redirect: '',
            redirected: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/user').then((data) => {
            this.setState({auth: data.data.auth});
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.auth === false) {
            this.setState({auth: '', redirect: <Redirect to='/sign-in'/>, redirected: true})
        } else {
            if (this.state.redirected) this.setState({redirect: '', redirected: false})
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        {this.state.redirect}
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
                        <Route path="/pie-chart">
                            <Header/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
