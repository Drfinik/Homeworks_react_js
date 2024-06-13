import React from 'react';
import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message text="Привет, мир!" />
      <Message text="Это мое первое задание на курсе React JS" />
    </div>
  );
}

export default App;