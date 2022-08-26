import React from "react";
import { Todo } from "../TodoModel";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {

  const handleDone = (id: number) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, isDone:!todo.isDone } : todo
    }))
  }

  const handleDelete = (id: number) => {

  }

  const handleEdit = (id: number) => {

  }

  return (
    <form className="single_todo">
      { todo.isDone ? 
        (<s className="single_todos--text">
         {todo.todo}
        </s> ): 
        (<span className="single_todos--text">
          {todo.todo}
         </span> )
      }
      
      <span className="icon" onClick={() => handleEdit(todo.id)}>
        <AiFillEdit />
      </span>
      <span className="icon" onClick={() => handleDelete(todo.id)}>
        <AiFillDelete />
      </span>
      <span className="icon" onClick={() => handleDone(todo.id)}>
        <MdDone />
      </span>
    </form>
  );
}


export default TodoCard;