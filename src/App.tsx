import React, { useState } from 'react';
import './App.css';
import TextBox from './components/TextBox';
import { Todo } from './TodoModel';

const App: React.FC = () => {

  const[todo, setTodo] = useState<string>("")
  const[todos, setTodos] = useState<Todo[]>([])

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <TextBox todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
