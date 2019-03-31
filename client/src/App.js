import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header';
import Search from './components/Search';
import Login from './components/Login';
import Compare from './components/Compare';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Header />
      {/* <Search /> */}
      <Route path='/' component={Search} exact />
      <Route path='/compare' component={Compare} />
      <Route path='/login' component={Login} />
    </Router>
    </div>
  );
}

export default App;
