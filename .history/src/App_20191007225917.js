import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/Alert/AlertState';

import './App.css';


const App = () => {
    return (
      <GithubState defaultValue>
        <AlertState defaultValue>
      <Router defaultValue>
      <div className="App"defaultValue>
       <Navbar />
       <div className="container" defaultValue>
         <Alert />
         <Switch>
            <Route exact path='/' component={Home} defaultValue />
            <Route exact path='/about' component={About} defaultValue/>
            <Route exact path='/user/:login'component={User}/>
            <Route component={NotFound}/>
         </Switch>
       </div>     
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  };


export default App;
