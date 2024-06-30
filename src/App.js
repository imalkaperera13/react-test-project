import React from 'react';
import Background from './components/background/background';
import TextField from './components/textfield/textfield';
import './App.css';

function App() {
  return (
    <Background>
      <div className="App">
        <h1>WELCOME TO MY FIRST PERSONAL SITE!</h1>
        <TextField />
      </div>
    </Background>
    
  );
}

export default App;

