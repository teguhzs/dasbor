var optionsTenagaPanen = {
  series: [],
  chart: {
    type: "bar",
    height: 365,
    stacked: false,
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
      style: {
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
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
      fontSize: "18px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#ffffff"],
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  // xaxis: {
  //     categories: ['Afdeling 1', 'Afdeling 2', 'Afdeling 3', 'Afdeling 4', 'Afdeling 5', 'Afdeling 6'],
  // },
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
  noData: {
    text: "Loading...",
    style: {
      fontSize: "25px",
      fontWeight: "bold",
      fontFamily: undefined,
      color: "#FFFFFF",
    },
  },
};

var d_tenaga_panen = new ApexCharts(
  document.querySelector("#grafikTenagaPanen"),
  optionsTenagaPanen
);
d_tenaga_panen.render();
