import React from "react";
import "./styles.css"

const TextBox: React.FC = () => {
  return (
    <div>
      <form className="input">
        <input type="input" placeholder="Enter Task Here" className="input_box"></input>
        <button className="input_submit" type="submit">Go</button>
      </form>
    </div>
  )
}

export default TextBox;