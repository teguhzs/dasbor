function getKategoriPemel() {
  $.ajax({
    type: "POST",
    url: "api/kategori_pemeliharaan.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      for (let i = 0; i < data["kategori_pemeliharaan"].length; i++) {
        var id_kategori_pemeliharaan =
          data["kategori_pemeliharaan"][i]["id_kategori_pemeliharaan"];

        var title = data["kategori_pemeliharaan"][i]["kategori_pemeliharaan"];

        grafikDonutPemeliharaanGrup(id_kategori_pemeliharaan, title);
      }
    },
  });
}

function grafikDonutPemeliharaanGrup(id_kategori_pemeliharaan, title) {
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

  d_donutPemel[id_kategori_pemeliharaan] = new ApexCharts(
    document.querySelector("#donutPemeliharaan" + id_kategori_pemeliharaan),
    optionDonutPemel
  );
  d_donutPemel[id_kategori_pemeliharaan].render();
}

function updateGrafikDonutPemeliharaanGrup() {
  $.ajax({
    type: "POST",
    url: "api/grafik_donut_pemeliharaan_grup.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      for (let i = 0; i < data["pemeliharaan"].length; i++) {
        var id_kategori_pemeliharaan =
          data["pemeliharaan"][i]["id_kategori_pemeliharaan"];
        var value = data["pemeliharaan"][i]["data"];
        d_donutPemel[id_kategori_pemeliharaan].updateSeries(value);
        console.log(id_kategori_pemeliharaan);
      }
    },
  });
}

var d_donutPemel = [];
var id_unit_usaha = document.getElementById("id_unit_usaha").value;

getKategoriPemel();
