import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Counter from './components/Counter';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/counter" component={Counter}/>
      <Route path="/topics" component={Home}/>
    </div>
  </Router>
)

export default App;
