function getJenisBahan() {
  $.ajax({
    type: "POST",
    url: "api/jenis_bahan.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      for (let i = 0; i < data["jenis_bahan"].length; i++) {
        var id_jenis_bahan = data["jenis_bahan"][i]["id_jenis_bahan"];

        var title = data["jenis_bahan"][i]["jenis_bahan"];

        grafikDonutBahanGrup(id_jenis_bahan, title);
      }
    },
  });
}

function grafikDonutBahanGrup(id_jenis_bahan, title) {
  var optionDonutPemel = {
    series: [],
    chart: {
      width: 270,
      type: "donut",
    },
    labels: ["Rencana", "Telah di Realisasi"],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#FFFFFF",
      },
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val, opts) {
        return val + " : " + opts.w.globals.series[opts.seriesIndex] + " Ha";
      },
      fontSize: "20px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 800,
      position: "bottom",
    },
    title: {
      text: title,
      floating: false,
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#FFFFFF",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
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

  d_donutBahan[id_jenis_bahan] = new ApexCharts(
    document.querySelector("#donutBahan" + id_jenis_bahan),
    optionDonutPemel
  );
  d_donutBahan[id_jenis_bahan].render();
}

function updateGrafikDonutBahanGrup() {
  $.ajax({
    type: "POST",
    url: "api/grafik_donut_bahan_grup.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      for (let i = 0; i < data["bahan"].length; i++) {
        var id_jenis_bahan = data["bahan"][i]["id_jenis_bahan"];
        var value = data["bahan"][i]["data"];
        d_donutBahan[id_jenis_bahan].updateSeries(value);
        console.log(id_jenis_bahan);
      }
    },
  });
}

var d_donutBahan = [];
var id_unit_usaha = document.getElementById("id_unit_usaha").value;

getJenisBahan();
