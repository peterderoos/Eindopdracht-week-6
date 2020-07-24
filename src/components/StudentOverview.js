import React from "react";
import "../App.css";

function StudentOverview({ getStudentList, getAssignments }) {
  return (
    <div className="component-container">
      <h2>All Students</h2>
      <p className="page-description">Selecteer individueel</p>
    </div>
  );
}

export default StudentOverview;
