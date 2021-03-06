import React, { useState } from "react";
import studentData from "../data/studentData";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
  VictoryZoomContainer,
} from "victory";

import studentGraph from "../assets/studentGraph";

function Student(props) {
  const [data] = useState(studentData);
  const studentStateData = data.map((object) => ({
    student: object.student,
    Assignment: object.assignment,
    Difficulty: parseInt(object.difficultyRating),
    Enjoyment: parseInt(object.enjoymentRating),
  }));

  const DataIndividualStudent = studentStateData.filter(
    (data) => data.student === props.student
  );

  // Victory charts worden hier gemaakt en in een groep gezet waardoor je de difficulty en enjoyment in 1 grafiek kan laten zien.
  // in theme kan je de instellingen van de groep aanpassen.
  return (
    <div className="chart-graphic">
      <h3>{props.student}</h3>
      <p>Paars = moeilijk | Goud = leuk</p>
      <VictoryChart
        domainPadding={{ y: 10 }}
        theme={studentGraph}
        containerComponent={<VictoryZoomContainer allowZoom={false} />}
      >
        <VictoryGroup offset={20}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={DataIndividualStudent}
            x="Assignment"
            y="Difficulty"
            tickValues={[1, 2, 3, 4, 5]}
          />
          <VictoryBar
            data={DataIndividualStudent}
            x="Assignment"
            y="Enjoyment"
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.Assignment}
          style={{
            tickLabels: {
              angle: -45,
              fontSize: 8,
              padding: 8,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{
            tickLabels: {
              fontSize: 8,
              padding: 8,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
}
export default Student;
