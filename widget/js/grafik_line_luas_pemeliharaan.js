var grafikLuasPemeliharaan = {
  series: [],
  chart: {
    height: 350,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
  },
  // colors: ["#0ac73c", "#c7170a"],
  // colors: ["#0fe300", "#fff800", "#0048e3", "#e300c9", "#00d8e3", "#8800e3"],
  theme: {
    palette: "palette1", // upto palette10
  },
  dataLabels: {
    formatter: function (val) {
      return val + " ha";
    },
    enabled: true,
    distributed: true,
    textAnchor: "start",
    style: {
      fontSize: "15px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      // colors: undefined,
    },
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
  stroke: {
    curve: "straight",
    width: 4,
  },
  title: {
    text: "Capaian Luas Pemeliharaan per Hari",
    floating: false,
    style: {
      fontSize: "25px",
      color: "#fff",
    },
    align: "left",
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
  markers: {
    size: 1,
  },
  // xaxis: {
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
  // },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -20,
    offsetX: 0,
    horizontalAlign: "right",
    fontSize: "20px",
    fontFamily: "Helvetica, Arial",
    fontWeight: 800,
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

var d_luasPemeliharaanUnit = new ApexCharts(
  document.querySelector("#grafikLuasPemeliharaan"),
  grafikLuasPemeliharaan
);
d_luasPemeliharaanUnit.render();
