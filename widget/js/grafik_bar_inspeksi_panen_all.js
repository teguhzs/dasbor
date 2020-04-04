var grafikInspeksiPanenAll = {
  series: [
    {
      name: "BTT",
      data: [44, 55, 41, 37, 22, 43, 21]
    },
    {
      name: "BMD",
      data: [53, 32, 33, 52, 13, 43, 32]
    },
    {
      name: "BMTD",
      data: [12, 17, 11, 9, 15, 11, 20]
    },
    {
      name: "PTT",
      data: [9, 7, 5, 8, 6, 9, 4]
    }
  ],
  chart: {
    type: "bar",
    height: 285,
    stacked: true,
    toolbar: {
      show: false
    }
  },
  grid: {
    borderColor: "#404040",
    strokeDashArray: 6,
    yaxis: {
      lines: {
        show: true
      }
    },
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  title: {
    text: "Indeks Inspeksi Panen per Tahun",
    floating: true,
    offsetY: 10,
    align: "center",
    style: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: "14px"
    }
  },
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      formatter: function(val) {
        return val + "K";
      }
    }
  },
  yaxis: {
    title: {
      text: undefined
    }
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return val + "K";
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: "bottom",
    horizontalAlign: "left",
    offsetX: 40
  }
};
var d_grafik_inspeksi_panen_all = new ApexCharts(
  document.querySelector("#grafikInspeksiPanenAll"),
  grafikInspeksiPanenAll
);
d_grafik_inspeksi_panen_all.render();
