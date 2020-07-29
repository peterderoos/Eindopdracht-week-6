import React from "react";
import "../App.css";
import StudentContainer from "./StudentContainer";

function StudentOverview({ getStudentList }) {
  return (
    <div>
      <h2>Alle Studenten</h2>
      <StudentContainer getStudentList={getStudentList} />
    </div>
  );
}

export default StudentOverview;
