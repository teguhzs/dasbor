var grafikInspeksiPanenAll = {
  series: [44, 33, 54],
  labels: ["Komoditas Sawit", "Komoditas Teh", "Komoditas Kopi"],
  legend: {
    position: "top"
  },
  title: {
    text: "Persentase Produksi Komoditas Tahun " + tahun,
    floating: true,
    offsetY: 270,
    align: "center",
    style: {
      color: "#fff",
      fontWeight: "bold"
    }
  },
  chart: {
    width: 300,
    type: "pie"
  },
  colors: ["#ed713b", "#3bed44", "#a68b56", "#94A74A"],
  fill: {
    type: "image",
    opacity: 0.85,
    image: {
      src: [
        "assets/img/g_sawit.jpg",
        "assets/img/g_teh.jpg",
        "assets/img/g_kopi.jpg"
      ],
      width: 25,
      imagedHeight: 25
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: "#fff",
    width: 5,
    dashArray: 0
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "30px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold"
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      color: "#000",
      opacity: 0.45
    }
  },
  noData: {
    text: "Loading..."
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ]
};

var d_produksikomoditas = new ApexCharts(
  document.querySelector("#donutProduksiKomoditas"),
  grafikInspeksiPanenAll
);
d_produksikomoditas.render();
