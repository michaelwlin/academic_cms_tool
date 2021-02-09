import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ProtectedRoute from './authentication/ProtectedRoute';
import Logout from './authentication/Logout'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Course from './pages/Course'
import Language from './pages/Language'
import NewCourse from './pages/NewCourse'
import NewObjective from './pages/NewObjective'
import EditObjective from './pages/EditObjective'
import NewActivity from './pages/NewActivity'
import EditActivity from './pages/EditActivity'
import Profile from './pages/Profile';
import Lost from './pages/404'


function App() {
  return (
    <div>
        <Router>
          <Switch>
          <Route path = "/login" component = {Login}/>
          <Route path = "/register" component = {Register}/>
          <ProtectedRoute path = "/" component = {Dashboard} exact/>
          <ProtectedRoute path = "/dashboard" component = {Dashboard}/>
          <ProtectedRoute path = "/course/:id" component = {Course}/>
          <ProtectedRoute path = "/courses/new" component = {NewCourse}/>
          <ProtectedRoute path = "/language/:id" component = {Language}/>
          <ProtectedRoute path = "/objective/new" component = {NewObjective}/>
          <ProtectedRoute path = "/objective/edit" component = {EditObjective}/>
          <ProtectedRoute path = "/activity/new" component = {NewActivity}/>
          <ProtectedRoute path = "/activity/edit" component = {EditActivity}/>
          <ProtectedRoute path = "/profile" component = {Profile}/>
          <ProtectedRoute path='/logout' component={Logout} exact />
          <ProtectedRoute path = "*" component={Lost}/>
          </Switch>
        </Router>
    </div>
  );
}


export default App;
