import React from "react";
import "../App.css";

function Button({ student }) {
  return (
    <div>
      <button key={student}>
        <p>{student}</p>
      </button>
    </div>
  );
}

export default Button;
