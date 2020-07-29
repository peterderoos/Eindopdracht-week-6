import React from "react";

import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
  VictoryZoomContainer,
} from "victory";

import studentGraph from "../assets/studentGraph";
// Victory charts worden hier gemaakt en in een groep gezet waardoor je de difficulty en enjoyment in 1 grafiek kan laten zien.
// in theme kan je de instellingen van de groep aanpassen.
function Chart({ assignmentRatingAverageWithLabels }) {
  return (
    <div className="chart-graphic">
      <VictoryChart
        domainPadding={{ y: 15 }}
        theme={studentGraph}
        containerComponent={<VictoryZoomContainer />}
      >
        <VictoryGroup offset={20}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={assignmentRatingAverageWithLabels}
            x="assignment"
            y="difficultyRating"
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={assignmentRatingAverageWithLabels.map(
              (averages) => averages.assignment
            )}
          />
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={assignmentRatingAverageWithLabels}
            x="assignment"
            y="enjoymentRating"
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={assignmentRatingAverageWithLabels.map(
              (averages) => averages.assignment
            )}
          />
        </VictoryGroup>
        <VictoryAxis
          style={{ tickLabels: { angle: -45 } }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map(
            (averages) => averages.assignment
          )}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>

      <VictoryChart domainPadding={15} theme={studentGraph}>
        <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: "purple" },
            parent: { border: "1px solid #ccc" },
          }}
          data={assignmentRatingAverageWithLabels}
          x="assignment"
          y="difficultyRating"
        />
        <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: "gold" },
            parent: { border: "1px solid #ccc" },
          }}
          data={assignmentRatingAverageWithLabels}
          x="assignment"
          y="enjoymentRating"
        />
        <VictoryAxis
          style={{ tickLabels: { angle: -45 } }}
          tickValues={[1, 2, 3, 4]}
          tickFormat={assignmentRatingAverageWithLabels.map(
            (averages) => averages.assignment
          )}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    </div>
  );
}

export default Chart;
