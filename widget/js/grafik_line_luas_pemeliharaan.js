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
  colors: ["#0ac73c", "#c7170a"],
  // colors: ["#0fe300", "#fff800", "#0048e3", "#e300c9", "#00d8e3", "#8800e3"],
  dataLabels: {
    formatter: function (val) {
      return val + " ha";
    },
    enabled: true,
    distributed: false,
    textAnchor: "middle",
    style: {
      fontSize: "11px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      // colors: undefined,
    },
  },
  fill: {
    type: "gradient",
    // opacity: 1,
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 0.5,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100]
    }

  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  title: {
    text: "Capaian Luas Pemeliharaan per Hari",
    floating: false,
    style: {
      fontSize: '20px',
      color: "#fff",
    },
    align: "left",
  },
  yaxis: {
    tickAmount: 5,
    labels: {
      show: true,
      align: 'right',
      style: {
        fontSize: '20px',
        fontFamily: 'Helvetica, Arial, sans-serif',
      },
    },
  },
  xaxis: {
    labels: {
      show: true,
      align: 'right',
      style: {
        fontSize: '20px',
        fontFamily: 'Helvetica, Arial, sans-serif',
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
    floating: false,
    offsetY: 0,
    offsetX: 0,
  },
};

var d_luasPemeliharaanUnit = new ApexCharts(
  document.querySelector("#grafikLuasPemeliharaan"),
  grafikLuasPemeliharaan
);
d_luasPemeliharaanUnit.render();
