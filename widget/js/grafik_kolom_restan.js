var optionsgrafikRestan = {
  series: [],
  chart: {
    type: "bar",
    height: 365,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
  },
  stroke: {
    curve: "straight",
  },
  colors: ["#00ff2f", "#fff800"],
  // colors: ['#15ff00', '#ffdb3b'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  legend: {
    position: "top",
  },
  fill: {
    type: "gradient",
    // opacity: 1,
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  yaxis: {
    tickAmount: 5,
    labels: {
      show: true,
      align: "right",
      style: {
        fontSize: "20px",
        fontFamily: "Helvetica, Arial, sans-serif",
      },
    },
  },
  xaxis: {
    labels: {
      show: true,
      align: "right",
      style: {
        fontSize: "20px",
        fontFamily: "Helvetica, Arial, sans-serif",
      },
    },
  },
  grid: {
    borderColor: "#404040",
    strokeDashArray: 6,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "";
    },
    offsetY: -30,
    style: {
      fontSize: "20px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#ffffff"],
    },
  },
};

var d_restan = new ApexCharts(
  document.querySelector("#grafikRestan"),
  optionsgrafikRestan
);
d_restan.render();
