import React, { useState } from 'react';
import './App.css';
import TextBox from './components/TextBox';
import { Todo } from './TodoModel';
import CardSection from './components/CardSection';

const App: React.FC = () => {

  const[todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (e:React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <TextBox todo={todo} setTodo={setTodo} addTodos={addTodos}/>
      <CardSection todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
