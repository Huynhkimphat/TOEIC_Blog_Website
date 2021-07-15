import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Headers from './components/layouts/Header/Header';
import Home from './components/Home/Home'
import Contact from './components/contact/contact';
import Courses from './components/courses/courses';
import Exam from './components/exam/exam';
import Login from './components/login/login';
import Practice from './components/practice/practice';
import Quest from './components/quest/quest';
import Errors from './components/error/error';


const App = () => {
    return (
      <Router>
          <Headers />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/course' component={Courses} />
            <Route path='/exam' component={Exam} />
            <Route path='/login' component={Login} />
            <Route path='/practice' component={Practice} />
            <Route path='/quest' component={Quest} />
            <Route path='/:something' component={Errors} />
          </Switch>
      </Router>
    )
}
export default App;
