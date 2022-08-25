import React from "react";
import { Todo } from "../TodoModel";
import "./styles.css"
import TodoCard from "./TodoCard";


interface Props {
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const CardSection: React.FC<Props> = ({ todos, setTodos }) => {

  return(
    <section className="todos">
      {todos.map((todo) => {
        <TodoCard 
          todo={todo.todo}
          isDone={todo.isDone}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
          />
      })}
    </section>
  )
}

export default CardSection