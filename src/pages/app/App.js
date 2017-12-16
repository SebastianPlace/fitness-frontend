import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Routines = () => (
  <div>
    <h2>Routines</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/routines">Routines</Link></li>
          </ul>
    
          <hr/>
    
          <Route exact path="/" component={Home}/>
          <Route path="/routines" component={Routines}/>
        </div>
      </Router>
    );
  }
}

export default App;
