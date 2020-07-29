import React from "react";
import StudentContainer from "./StudentContainer";

function Student({ student, getRating, getStudentList }) {
  return (
    <div>
      <h2>{student}</h2>
      <StudentContainer getStudentList={getStudentList} />
    </div>
  );
}

export default Student;
