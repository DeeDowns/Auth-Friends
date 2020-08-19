import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import { Nav, NavItem } from 'reactstrap'
import './App.css';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav className='nav'>
          <NavItem className='navItem'>
            <NavLink className='login' to='/login'>Login</NavLink>
          </NavItem>
          <NavItem className='navItem'> 
            <NavLink className='friends' to='/friends'>Friends</NavLink>
          </NavItem>
        </Nav>

        <Switch>
          <PrivateRoute exact path='/friends'>
            <FriendsList />
          </PrivateRoute>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
