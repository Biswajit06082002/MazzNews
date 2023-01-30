import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
      <Navbar/>
     
      <Switch>
      <Route exact path="/"> <News key={Date.now()} pageSize={8} country={"in"} category={"general"}/></Route>
      <Route exact path="/Business"> <News key={Date.now()} pageSize={8} country={"in"} category={"business"}/></Route>
      <Route exact path="/Sports"> <News key={"Sports03216"} pageSize={8} country={"in"} category={"sports"}/></Route>
      <Route exact path="Entertainment"> <News key={"Entertainment0231"} pageSize={8} country={"in"} category={"entertainment"}/></Route>
      <Route exact path="/Health"> <News key={"Health0321"} pageSize={8} country={"in"} category={"health"}/></Route>
      <Route exact path="/Science"> <News key={"Science0231"} pageSize={8} country={"in"} category={"science"}/></Route>
      <Route exact path="/Technology"> <News key={"Technology023"} pageSize={8} country={"in"} category={"technology"}/></Route>
  
      </Switch>
      </Router>
    </div>
    )
  }
}



