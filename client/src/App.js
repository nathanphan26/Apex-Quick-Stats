import React from 'react';
import './App.css';

import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
