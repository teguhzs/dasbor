var grafikTbs = {
  chart: {
    height: 368,
    type: "bar",
    toolbar: {
      show: false,
    },
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      endingShape: "flat",
      barHeight: "70%",
    },
  },
  dataLabels: {
    enabled: false,
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
  colors: ["#00ff2f", "#fff800"],
  series: [],
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetX: 40,
  },
  grid: {
    borderColor: "#404040",
    strokeDashArray: 6,
    yaxis: {
      lines: {
        show: false,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  yaxis: {
    tickAmount: 5,
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
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + " Kg";
    },
    style: {
      fontSize: "16px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 500,
      colors: ["#1100ff"],
    },
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

var d_tbs = new ApexCharts(
  document.querySelector("#tandanBuahSegar"),
  grafikTbs
);

d_tbs.render();

// ajax grafik TBS
function loadTbs() {
  $.ajax({
    type: "POST",
    url: "api/grafik_tbs.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_tbs.updateSeries([
        {
          name: "Realisasi",
          data: data["realisasi"],
        },
      ]);
    },
  });
}
