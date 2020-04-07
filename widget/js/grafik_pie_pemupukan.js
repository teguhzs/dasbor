var optionsPiePemupukan = {
  series: [],
  chart: {
    // width: 380,
    height: 235,
    type: "pie",
  },

  colors: ["#0ac73c", "#c7170a"],
  // colors: ['#0032fc', '#fc002a'],
  // colors: ['#00ff2f', '#fff800'],
  // colors: ['#e30000', '#08e300'],
  labels: ["Realisasi", "RKAP"],
  title: {
    text: "Persentase Penggunaan Pupuk Bulan Ini",
    floating: false,
    style: {
      fontSize: "10px",
      color: "#fff",
    },
    align: "center",
  },
  legend: {
    position: "bottom",
    floating: false,
    fontSize: "10px",
    offsetY: -8,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "top",
        },
      },
    },
  ],
  stroke: {
    show: true,
    curve: "smooth",
    colors: "#010836",
    width: 0,
  },
  dataLabels: {
    style: {
      fontSize: "25px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
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
  fill: {
    type: "solid",
    opacity: 1,
  },
};

var d_piePemupukan = new ApexCharts(
  document.querySelector("#piePemupukan"),
  optionsPiePemupukan
);
d_piePemupukan.render();
