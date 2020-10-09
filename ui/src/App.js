import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Menu from "./components/Main Menu/Menu";
import LiveView from "./components/Live/LiveView";

import './App.css';

function App() {
    return (
        <div style={mainStyle}>
            <Router>
                <Menu location={window.location.pathname}/>

                <Switch>
                    <Redirect exact from="/" to="/live"/>
                    <Route exact path={'/live'}>
                        <LiveView/>
                    </Route>
                    <Route path={'/stats'}>
                        2
                    </Route>
                    <Route path={'/unite'}>
                        3
                    </Route>
                    <Route path={'/forever'}>
                        4
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

const mainStyle = {
    width: '100vw',
    height: '100vh',
    background: '#F3F3F3',
    display: 'flex',
    overflow:'hidden'
}

export default App;
