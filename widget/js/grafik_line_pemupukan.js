var grafikPemupukan = {
  series: [],
  chart: {
    height: 220,
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
      return val + " kg";
    },
    enabled: true,
    distributed: false,
    textAnchor: "start",
    style: {
      fontSize: "10px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      // colors: undefined,
    },
  },
  fill: {
    type: "gradient",
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  title: {
    text: "Penggunaan Pupuk per Hari",
    floating: false,
    style: {
      color: "#fff",
    },
    align: "left",
  },
  yaxis: {
    tickAmount: 3,
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

var d_pemupukanLine = new ApexCharts(
  document.querySelector("#grafikPemupukan"),
  grafikPemupukan
);
d_pemupukanLine.render();
