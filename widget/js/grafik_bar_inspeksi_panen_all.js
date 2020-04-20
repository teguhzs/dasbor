var grafikInspeksiPanenAll = {
  series: [],
  chart: {
    type: "bar",
    height: 285,
    stacked: true,
    toolbar: {
      show: false,
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
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  title: {
    text: "Indeks Inspeksi Panen per Tahun",
    floating: true,
    offsetY: 10,
    align: "center",
    style: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: "14px",
    },
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  xaxis: {
    labels: {
      formatter: function (val) {
        return val + "";
      },
    },
  },
  yaxis: {
    title: {
      text: undefined,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "";
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "bottom",
    horizontalAlign: "left",
    offsetX: 40,
  },
};
var d_grafik_inspeksi_panen_all = new ApexCharts(
  document.querySelector("#grafikInspeksiPanenAll"),
  grafikInspeksiPanenAll
);
d_grafik_inspeksi_panen_all.render();
