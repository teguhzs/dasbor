var grafikPerbandinganInspeksi = {
  series: [
    {
      name: "BTT",
      data: [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },
    {
      name: "BMD",
      data: [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },
    {
      name: "BMTD",
      data: [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },
    {
      name: "PTT",
      data: [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },
  ],
  chart: {
    height: 160,
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
  // colors: ['#0ac73c', '#c7170a'],
  colors: ["#0fe300", "#fff800", "#0048e3", "#e300c9", "#00d8e3", "#8800e3"],
  dataLabels: {
    formatter: function (val) {
      return val + "";
    },
    enabled: true,
  },
  fill: {
    type: "solid",
  },
  stroke: {
    curve: "straight",
    width: 3,
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
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: 0,
    offsetX: -5,
  },
};

var d_perbandinganInspeksi = new ApexCharts(
  document.querySelector("#linePerbandinganInspeksi"),
  grafikPerbandinganInspeksi
);
d_perbandinganInspeksi.render();
