import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}


const TextBox:React.FC<Props>= ({ todo, setTodo }) => {
  return (
    <div>
      <form className="input">
        <input 
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