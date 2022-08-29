import React, { useEffect, useRef, useState } from "react";
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

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, isDone:!todo.isDone } : todo
    }))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, todo: editTodo} : todo)
    ));

    setEdit(false);
  }
  
  const inputRef = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])


  return (
    <form className="single_todo" onSubmit={(e) => handleEdit(e, todo.id)}>

      {edit ? (<input 
          ref={inputRef}
          value={editTodo} 
          onChange={(e) => setEditTodo(e.target.value)}
          className="single_todo--text">   
        </input>) : todo.isDone ? 
        (<s className="single_todo--text">
         {todo.todo}
        </s> ): 
        (<span className="single_todo--text">
          {todo.todo}
         </span> )
      }
      
      
      <span className="icon" onClick={() => {
        if(!edit && !todo.isDone) {
          setEdit(!edit)
        }
      }
      }>
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