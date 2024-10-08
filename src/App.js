// src/App.js

import React from 'react';
import ApiViz from './components/APIViz';

import "./App.css"

const App = () => {
  return (
    <div className="App main-container" >
      <h1 className="text-2xl text-center p-4">API Visualization App</h1>
      <ApiViz />
    </div>
  );
};

export default App;
