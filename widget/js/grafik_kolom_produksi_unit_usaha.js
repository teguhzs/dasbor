var grafikProduksiUnitUsaha = {
  series: [],
  chart: {
    height: 260,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      endingShape: "flat",
      columnWidth: "30%",
      dataLabels: {
        position: "top", // top, center, bottom
        horizontal: true,
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -10,
    style: {
      fontSize: "14px",
      colors: ["#FFF"],
      fontWeight: "bold",
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
  xaxis: {
    position: "bottom",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  title: {
    text: "Indikator Produksi Unit Usaha Tahun " + tahun,
    floating: true,
    offsetY: 0,
    align: "center",
    style: {
      color: "#FFF",
    },
  },
};

var d_produksi_unit_usaha = new ApexCharts(
  document.querySelector("#grafikProduksiUnitUsaha"),
  grafikProduksiUnitUsaha
);
d_produksi_unit_usaha.render();
