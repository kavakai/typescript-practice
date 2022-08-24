import React from 'react';
import './App.css';
import TextBox from './components/TextBox';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <TextBox />
    </div>
  );
}

export default App;
