import React from "react";
import Chart from "./Chart";

function StudentPage({
  student,
  getEnjoymentRatings,
  getDifficultyRatings,
  getStudentList,
}) {
  return (
    <div>
      <h2>{student}</h2>
    </div>
  );
}

export default StudentPage;
