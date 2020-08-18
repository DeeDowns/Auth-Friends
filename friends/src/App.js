import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import './App.css';

function App() {


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>Friends (Protected)</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/friends' component={FriendsList} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
