import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Routines from '../routines/Routines'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const NavBar = styled.div`
  display: 'flex';
  font-size: 1.5em;
  padding: 2em;
`

const NavBarLink = styled(Link)`
  margin-right: 50px;
`

const AppContentWrapper = styled.div`
  padding: 2em;
`
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar>
            <NavBarLink to="/">Home</NavBarLink>
            <NavBarLink to="/routines">Routines</NavBarLink>
          </NavBar>
    
          <AppContentWrapper>
            <Route exact path="/" component={Home}/>
            <Route path="/routines" component={Routines}/>
          </AppContentWrapper>
        </div>
      </Router>
    );
  }
}

export default App;
