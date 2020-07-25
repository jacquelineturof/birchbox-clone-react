import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Nav from './components/Nav'

import Landing from './components/pages/Landing'
import Lists from './components/pages/UserLists'

import './icon.config'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path = "/" exact component = { Landing } />
        <Route path = "/lists" component = { Lists } />
      </Switch>
    </div>
  );
}

export default App;
