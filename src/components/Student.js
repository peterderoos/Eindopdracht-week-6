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

  const objectStateData = data.map((object) => ({
    Name: object.student,
    Assignment: object.assignment,
    Difficulty: parseInt(object.difficultyRating),
    Enjoyment: parseInt(object.enjoymentRating),
  }));

  const DataIndividualStudent = objectStateData.filter(
    (item) => item.student === props.newNames
  );
  // Victory charts worden hier gemaakt en in een groep gezet waardoor je de difficulty en enjoyment in 1 grafiek kan laten zien.
  // in theme kan je de instellingen van de groep aanpassen.
  return (
    <div className="chart-graphic">
      <VictoryChart
        domainPadding={{ y: 10 }}
        theme={studentGraph}
        containerComponent={<VictoryZoomContainer allowZoom={false} />}
      >
        <VictoryGroup offset={20}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={DataIndividualStudent}
            x="assignment"
            y="difficulty"
            style={{ data: { fill: "#4768B8" } }}
          />
          <VictoryBar
            data={DataIndividualStudent}
            x="assignment"
            y="enjoyment"
            style={{ data: { fill: "#F5BA13" } }}
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.Assignment}
          style={{
            tickLabels: {
              fontSize: 5,
              padding: 10,
              writingMode: "vertical-lr",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{
            tickLabels: {
              fontSize: 15,
              padding: 10,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
}
export default Student;
