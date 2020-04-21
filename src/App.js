import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import RichEditor from './components/Editor/material'

function App() {
  return (
    <div className="App">
      <h1>Them simply Editor with draft-js and material-ui</h1>
      <RichEditor />
    </div>
  );
}

export default App;
