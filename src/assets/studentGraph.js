const studentGraph = {
  axis: {
    style: {
      grid: {
        fill: "none",
        stroke: "none",
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#90A4AE",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      tickLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 8,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
  },

  chart: {
    width: 1000,
    height: 400,
    padding: 50,
  },
  group: {
    colorScale: ["purple", "gold"],
    width: 350,
    height: 350,
    padding: 500,
  },

  line: {
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2,
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    width: 350,
    height: 350,
    padding: 50,
  },
};

export default studentGraph;
