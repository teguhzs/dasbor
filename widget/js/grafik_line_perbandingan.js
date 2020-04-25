var grafikPerbandingan = {
  series: [],
  chart: {
    height: 210,
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
  colors: ["#fff800", "#0fe300", "#0048e3", "#e300c9", "#00d8e3", "#8800e3"],
  dataLabels: {
    formatter: function (val) {
      return val + " Ton";
    },
    enabled: true,
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
    width: 2,
  },
  yaxis: {
    tickAmount: 3,
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
  title: {
    text: "Capaian Produksi per Hari",
    align: "left",
    margin: 20,
    floating: true,
    style: {
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily: undefined,
      color: "#fff",
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
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: 10,
    offsetX: 0,
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

var d_perbandingan = new ApexCharts(
  document.querySelector("#grafikPerbandingan"),
  grafikPerbandingan
);
d_perbandingan.render();
