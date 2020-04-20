var grafikCapaianProduksi = {
  series: [],
  chart: {
    height: 310,
    type: "line",
    stacked: false,
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
  title: {
    text: "Indeks Pencapaian Produksi per Tahun",
    floating: true,
    offsetY: 10,
    align: "center",
    style: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: "18px",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [1, 1, 4],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#008FFB",
      },
      labels: {
        style: {
          colors: "#008FFB",
        },
      },
      title: {
        text: "RKAP",
        style: {
          color: "#008FFB",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    {
      seriesName: "RKAP",
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#00E396",
      },
      labels: {
        style: {
          colors: "#00E396",
        },
      },
      title: {
        text: "Pencapaian ",
        style: {
          color: "#00E396",
        },
      },
    },
    {
      seriesName: "Indeks Pencapaian per Tahun",
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#FEB019",
      },
      labels: {
        style: {
          colors: "#FEB019",
        },
      },
      title: {
        text: "Indeks Pencapaian per Tahun",
        style: {
          color: "#FEB019",
        },
      },
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60,
    },
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40,
  },
};

var d_capaianProduksi = new ApexCharts(
  document.querySelector("#grafikCapaianProduksi"),
  grafikCapaianProduksi
);
d_capaianProduksi.render();
