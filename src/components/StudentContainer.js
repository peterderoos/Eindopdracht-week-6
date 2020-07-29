import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function StudentContainer({ getStudentList }) {
  return (
    <div className="student-grid-container">
      {getStudentList
        ? getStudentList.map((student) => (
            <Link key={student} to={`/${student.replace(/\s/g, "-")}`}>
              <Button key={student} student={student} />
            </Link>
          ))
        : null}
    </div>
  );
}

export default StudentContainer;
