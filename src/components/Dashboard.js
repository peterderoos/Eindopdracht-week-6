import React from "react";
import "../App.css";
import Chart from "./Chart";

function Dashboard({ getStudentList, getAssignments, studentData }) {
  const getAverageDifficultyRating = (assignment) => {
    const getTotalDifficultyRating = studentData
      .filter((item) => {
        return item.assignment === assignment;
      })
      .map((item) => item.difficultyRating)
      .reduce((currentTotal, grading) => {
        return grading + currentTotal;
      }, 0);
    return getTotalDifficultyRating / getStudentList.length;
  };

  const getAverageEnjoymentRating = (assignment) => {
    const getTotalEnjoymentRating = studentData
      .filter((item) => {
        return item.assignment === assignment;
      })
      .map((item) => item.enjoymentRating)
      .reduce((currentTotal, grading) => {
        return grading + currentTotal;
      }, 0);
    return getTotalEnjoymentRating / getStudentList.length;
  };

  const assignmentRatingAverageWithLabels = getAssignments.map((item) => ({
    assignment: item,
    difficultyRating: getAverageDifficultyRating(item),
    enjoymentRating: getAverageEnjoymentRating(item),
    label: `Difficulty Rating: ${getAverageDifficultyRating(item).toFixed(
      1
    )} \n Enjoyment Rating: ${getAverageEnjoymentRating(item).toFixed(1)}`,
  }));

  return (
    <div className="component-container">
      <p>Paars = moeilijk</p>
      <p>Goud = leuk</p>
      <Chart
        assignmentRatingAverageWithLabels={assignmentRatingAverageWithLabels}
      />
    </div>
  );
}

export default Dashboard;
