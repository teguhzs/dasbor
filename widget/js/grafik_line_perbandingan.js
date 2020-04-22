var grafikPerbandingan = {
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
  title: {
    text: " ",
    align: "left",
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
    offsetY: -25,
    offsetX: -5,
  },
};

var d_perbandingan = new ApexCharts(
  document.querySelector("#grafikPerbandingan"),
  grafikPerbandingan
);
d_perbandingan.render();
