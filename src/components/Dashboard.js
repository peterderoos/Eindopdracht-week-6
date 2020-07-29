import React from "react";
import "../App.css";
import Chart from "./Chart";

function Dashboard({ getStudentList, getAssignments, studentData }) {
  const getAverageDifficultyRating = (assignment) => {
    const getTotalDifficultyRating = studentData
      .filter((data) => {
        return data.assignment === assignment;
      })
      .map((data) => data.difficultyRating)
      .reduce((currentTotal, grading) => {
        return grading + currentTotal;
      }, 0);
    return getTotalDifficultyRating / getStudentList.length;
  };

  const getAverageEnjoymentRating = (assignment) => {
    const getTotalEnjoymentRating = studentData
      .filter((data) => {
        return data.assignment === assignment;
      })
      .map((data) => data.enjoymentRating)
      .reduce((currentTotal, grading) => {
        return grading + currentTotal;
      }, 0);
    return getTotalEnjoymentRating / getStudentList.length;
  };

  const assignmentAverage = getAssignments.map((data) => ({
    assignment: data,
    difficultyRating: getAverageDifficultyRating(data),
    enjoymentRating: getAverageEnjoymentRating(data),
    label: `Difficulty Rating: ${getAverageDifficultyRating(data).toFixed(
      1
    )} \n Enjoyment Rating: ${getAverageEnjoymentRating(data).toFixed(1)}`,
  }));

  return (
    <div className="component-container">
      <p>Paars = moeilijk | Goud = leuk</p>
      <Chart assignmentAverage={assignmentAverage} />
    </div>
  );
}

export default Dashboard;
