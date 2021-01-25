import './App.css';
import React from 'react'
import Home from './Components/Pages/About-Me/index'
import Projects from './Components/Pages/Projects/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Layout/Header'

class App extends React.Component {
  render() {
  return (
      <Router>
        <Header subheading="Student, Cyclist, iOS and Web Developer"/>
        <Switch>
          <Route path="/projects">
            <Projects/> 
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router> 
  );
  }
}

export default App;
