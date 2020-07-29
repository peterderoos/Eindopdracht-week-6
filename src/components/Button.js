import React from "react";
import "../App.css";

function StudentButton({ student }) {
  return (
    <div>
      <button key={student}>
        <p>{student}</p>
      </button>
    </div>
  );
}

export default StudentButton;
