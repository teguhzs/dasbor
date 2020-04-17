// load panel curah_hujan
function loadPanelCurahHujan() {
  var curah_hujan_lama = document.getElementById("curah_hujan_lama").value;
  var curah_hujan_persen_lama = document.getElementById(
    "curah_hujan_persen_lama"
  ).value;
  var curah_hujan_value = 0;
  var curah_hujan_persen = 0;

  $.ajax({
    type: "POST",
    url: "api/panel_curah_hujan.php",
    data: { curah_hujan_lama: curah_hujan_lama, id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      curah_hujan_value = data["curah_hujan_value"];
      curah_hujan_persen = data["curah_hujan_persen"];

      if (curah_hujan_persen >= curah_hujan_persen_lama) {
        document.getElementById("curah_hujan_icon").className =
          "far fa-arrow-alt-circle-up text-success label-berubah";
      } else if (curah_hujan_persen < curah_hujan_persen_lama) {
        document.getElementById("curah_hujan_icon").className =
          "far fa-arrow-alt-circle-down text-danger label-berubah";
      }

      document.getElementById("curah_hujan_lama").value = curah_hujan_value;
      document.getElementById(
        "curah_hujan_persen_lama"
      ).value = curah_hujan_persen;
      document.getElementById("curah_hujan_value").innerHTML =
        curah_hujan_value + " mm";
      document.getElementById("curah_hujan_persen").innerHTML =
        curah_hujan_persen + "%";
    },
  });
}

// load panel realisasi
function loadPanelRealisasi() {
  var realisasi_lama = document.getElementById("realisasi_lama").value;
  var realisasi_persen_lama = document.getElementById("realisasi_persen_lama")
    .value;
  var realisasi_value = 0;
  var realisasi_persen = 0;

  $.ajax({
    type: "POST",
    url: "api/panel_realisasi.php",
    data: { realisasi_lama: realisasi_lama, id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      realisasi_value = data["realisasi_value"];
      realisasi_persen = data["realisasi_persen"];

      if (realisasi_persen >= realisasi_persen_lama) {
        document.getElementById("realisasi_icon").className =
          "far fa-arrow-alt-circle-up text-success label-berubah";
      } else if (realisasi_persen < realisasi_persen_lama) {
        document.getElementById("realisasi_icon").className =
          "far fa-arrow-alt-circle-down text-danger label-berubah";
      }

      document.getElementById("realisasi_lama").value = realisasi_value;
      document.getElementById("realisasi_persen_lama").value = realisasi_persen;
      document.getElementById("realisasi_value").innerHTML =
        realisasi_value + " Ton";
      document.getElementById("realisasi_persen").innerHTML =
        realisasi_persen + "%";
    },
  });
}

// load panel rkap
function loadPanelRkap() {
  $.ajax({
    type: "POST",
    url: "api/panel_rkap.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      document.getElementById("rkap_value").innerHTML =
        data["rkap_value"] + " Ton";
    },
  });
}

// ajax grafik curah hujan
function loadCurahHujan() {
  $.ajax({
    type: "POST",
    url: "api/grafik_line_curah_hujan.php",
    data: "data",
    dataType: "JSON",
    success: function (data) {
      var series = [];
      for (let i = 0; i < data["curah_hujan"].length; i++) {
        var seriesData = {
          name: "Afdeling " + i,
          data: data["curah_hujan"][i][i + 1],
        };
        series.push(seriesData);
      }
      // console.log(series);
      d_curah_hujan.updateSeries(series);
    },
  });
}

// ajax grafik Restan
function loadRestan() {
  $.ajax({
    type: "POST",
    url: "api/grafik_kolom_restan.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_restan.updateSeries([
        {
          name: "Restan",
          data: data["restan"],
        },
      ]);
    },
  });
}

// ajax grafik perbandingan produksi
function loadPerbandinganProduksi() {
  $.ajax({
    type: "POST",
    url: "api/grafik_line_perbandingan.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_perbandingan.updateSeries([
        {
          name: "RKAP",
          data: data["rkap"],
        },
        {
          name: "REALISASI",
          data: data["realisasi"],
        },
      ]);
    },
  });
}

// ajax grafik tenaga_panen
function loadTenagaPanen() {
  $.ajax({
    type: "POST",
    url: "api/grafik_tenaga_panen.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_tenaga_panen.updateSeries([
        {
          name: "Realisasi",
          data: data["realisasi"],
        },
        {
          name: "RKAP",
          data: data["rkap"],
        },
      ]);
    },
  });
}

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

// Ajax Ketuntasan Ancak
function loadAncak() {
  $.ajax({
    type: "POST",
    url: "api/grafik_pie_ketuntasan_ancak.php",
    data: "data",
    dataType: "JSON",
    success: function (data) {
      // console.log(data);
      d_ancak.updateSeries(data);
    },
  });
}

// Ajax all load
function loadAllUnitUsaha() {
  loadPanelCurahHujan();
  loadPanelRealisasi();
  loadPanelRkap();
  loadCurahHujan();
  loadRestan();
  loadTbs();
  loadAncak();
  loadTenagaPanen();
  loadPerbandinganProduksi();
}

var id_unit_usaha = document.getElementById("id_unit_usaha").value;
