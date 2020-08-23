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
            layout:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/validate').then((data) => {
            this.setState({auth: data.data.auth});
        }).catch(err => console.log(err))
        axios.get('http://localhost:8080/api/user/layout').then((data) => {
            if (data.data.result !== undefined) {
                this.setState({
                    layout: data.data.result
                })
            } else {
                this.setState({
                    layout: data.data.error
                })
            }
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

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        {this.state.redirect}
                        <Route path="/dashboard">
                            <Header layout={this.state.layout}/>
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
