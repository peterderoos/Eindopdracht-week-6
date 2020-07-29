import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import studentData from "./data/studentData";
import StudentOverview from "./components/StudentOverview";

import "./App.css";

function App() {
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
          {getStudentList
            ? getStudentList.map((student) => (
                <Route
                  exact
                  path={`/${student.replace(/\s/g, "-")}`}
                  key={student}
                ></Route>
              ))
            : null}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
