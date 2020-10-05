import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Menu from "./components/Main Menu/Menu";

import './App.css';

function App() {
    return (
        <div style={mainStyle}>
            <Router>
                <Menu/>

                <Switch>
                    <Route path={'/live'}>
                        1
                    </Route>
                    <Route path={'/love'}>
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
    display: 'flex'
}

export default App;
