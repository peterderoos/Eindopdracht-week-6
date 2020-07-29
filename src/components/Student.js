import React from "react";
import StudentContainer from "./StudentContainer";

function Student({
  student,
  getEnjoymentRatings,
  getDifficultyRatings,
  getStudentList,
}) {
  return (
    <div>
      <h2>{student}</h2>
      <StudentContainer getStudentList={getStudentList} />
    </div>
  );
}

export default Student;
