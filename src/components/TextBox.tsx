import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodos: (e:React.FormEvent) => void;
}


const TextBox:React.FC<Props>= ({ todo, setTodo, addTodos }) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form className="input" onSubmit={(e) => {
        addTodos(e);
        inputRef.current?.blur();
        }}>
        <input 
          ref={inputRef}
          type="input" 
          placeholder="Enter Task Here" 
          className="input_box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        >
        </input>
        <button className="input_submit" type="submit">Go</button>
      </form>
    </div>
  )
}

export default TextBox;