import React from 'react';
import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message text="Привет, мир!" />
      <Message text="Это второй текст" />
    </div>
  );
}

export default App;