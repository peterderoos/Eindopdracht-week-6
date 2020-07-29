import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import studentData from "./data/studentData";
import StudentOverview from "./components/StudentOverview";
import Student from "./components/Student";
import "./App.css";

function App() {
  // Verkrijg de lijst van studenten
  const getStudentList = [
    ...new Set(studentData.map((data) => data.student)),
  ].sort((student1, student2) => {
    if (student1 > student2) {
      return 1;
    } else if (student1 === student2) {
      return 0;
    } else if (student1 < student2) {
      return -1;
    }
    return 0;
  });
  // Verkrijg de lijst van opdrachten
  const getAssignments = [
    ...new Set(studentData.map((data) => data.assignment)),
  ].sort((assignment1, assignment2) => {
    if (assignment1 > assignment2) {
      return 1;
    } else if (assignment1 === assignment2) {
      return 0;
    } else if (assignment1 < assignment2) {
      return -1;
    }
    return 0;
  });

  // Verkrijg de rating van beide in 1 functie verwerkt
  const getRating = (student, assignment, rated) => {
    const selectedRating = studentData
      .filter((data) => {
        return data.student === student;
      })
      .filter((student) => {
        return student.assignment === assignment;
      });
    if (rated === "enjoyment") {
      return selectedRating[0].enjoymentRating;
    }
    if (rated === "difficulty") {
      return selectedRating[0].difficultyRating;
    }
  };

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Dashboard
              getStudentList={getStudentList}
              getAssignments={getAssignments}
              studentData={studentData}
            />
          </Route>
          <Route path="/studentoverview">
            <StudentOverview
              getStudentList={getStudentList}
              getAssignments={getAssignments}
            />
          </Route>
          {getStudentList.map((student) => (
            <Route exact path={`/${student.replace(/\s/g, "-")}`} key={student}>
              <Student
                getStudentList={getStudentList}
                student={student}
                getRating={getRating}
              />
            </Route>
          ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
