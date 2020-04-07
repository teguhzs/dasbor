var optionsKolomPtt = {
  series: [
    {
      name: "Realisasi",
      data: [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 160,
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
  colors: ["#0ac73c", "#c7170a"],
  // colors: ['#00ff2f', '#fff800'],
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
    },
  },
  xaxis: {
    categories: [
      "Afdeling 1",
      "Afdeling 2",
      "Afdeling 3",
      "Afdeling 4",
      "Afdeling 5",
      "Afdeling 6",
    ],
  },
  legend: {
    position: "top",
  },
  fill: {
    type: "solid",
    opacity: 1,
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
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "";
    },
    style: {
      fontSize: "20px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      // colors: ['#1100ff']
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      color: "#000",
      opacity: 0.45,
    },
  },
};

var d_ptt = new ApexCharts(
  document.querySelector("#kolomPtt"),
  optionsKolomPtt
);
d_ptt.render();
