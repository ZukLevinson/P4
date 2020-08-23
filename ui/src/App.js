import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import axios from "axios";

import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import MainBox from "./components/sign/mainBox";

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: '',
            redirect: null,
            redirected: false,
            show_header: true
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/validate').then((data) => {
            this.setState({auth: data.data.auth});
        }).catch(err => console.log(err))

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.auth === false) {
            this.setState({auth: '', redirect: <Redirect to='/sign-in'/>, redirected: true})
        }
        if (this.state.redirected) this.setState({redirect: null, redirected: false})
    }

    componentWillUnmount() {
        this.setState({redirect: null});
    }

    handleHeader = (show) => {
        this.setState({show_header: show})
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header show={this.state.show_header}/>
                    <Switch>
                        {this.state.redirect}
                        <Route path="/dashboard">
                            <Dashboard header={this.handleHeader}/>
                        </Route>
                        <Route path="/sign-in">
                            <MainBox header={this.handleHeader} children={<SignIn/>}/>
                        </Route>
                        <Route path="/sign-up">
                            <MainBox header={this.handleHeader} children={<SignUp/>}/>
                        </Route>
                        <Route path="/stats">
                        </Route>
                        <Route path="/upload">
                        </Route>
                        <Route path="/vector">
                        </Route>
                        <Route path="/download">
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
