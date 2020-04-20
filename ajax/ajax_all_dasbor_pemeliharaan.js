// load panel bahan pupuk
function loadPanelBahanPupuk() {
  var bahan_pupuk_lama = document.getElementById("bahan_pupuk_lama").value;
  var bahan_pupuk_persen_lama = document.getElementById(
    "bahan_pupuk_persen_lama"
  ).value;
  var bahan_pupuk_value = 0;
  var bahan_pupuk_persen = 0;
  var panel = document.getElementById("panel_bahan_pupuk");

  $.ajax({
    type: "POST",
    url: "api/panel_bahan_pemupukan.php",
    data: {
      bahan_pupuk_lama: bahan_pupuk_lama,
      id_unit_usaha: id_unit_usaha,
    },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      var bahan_pupuk_rkap = data["bahan_pupuk_rkap"];
      bahan_pupuk_value = data["bahan_pupuk_value"];
      bahan_pupuk_persen = data["bahan_pupuk_persen"];

      if (bahan_pupuk_persen >= bahan_pupuk_persen_lama) {
        document.getElementById("bahan_pupuk_icon").className =
          "far fa-arrow-alt-circle-up text-success label-berubah";
      } else if (bahan_pupuk_persen < bahan_pupuk_persen_lama) {
        document.getElementById("bahan_pupuk_icon").className =
          "far fa-arrow-alt-circle-down text-danger label-berubah";
      }

      var batas1 = bahan_pupuk_rkap - 20;
      var batas2 = bahan_pupuk_rkap + 20;

      if (bahan_pupuk_value <= batas1) {
        panel.className = "widget widget-one text-center danger-gradient";
      } else if (
        bahan_pupuk_value > batas1 &&
        bahan_pupuk_value < bahan_pupuk_rkap
      ) {
        panel.className = "widget widget-one text-center warning-gradient";
      } else if (
        bahan_pupuk_value >= bahan_pupuk_rkap &&
        bahan_pupuk_value <= batas2
      ) {
        panel.className = "widget widget-one text-center success-gradient";
      } else {
        panel.className = "widget widget-one text-center danger-gradient";
      }

      document.getElementById("bahan_pupuk_lama").value = bahan_pupuk_value;
      document.getElementById(
        "bahan_pupuk_persen_lama"
      ).value = bahan_pupuk_persen;
      document.getElementById("bahan_pupuk_value").innerHTML =
        bahan_pupuk_value + " Orang";
      document.getElementById("bahan_pupuk_persen").innerHTML =
        bahan_pupuk_persen + "%";
    },
  });
}

// load panel tenaga pemeliharaan
function loadPanelTenagaPemeliharaan() {
  var tenaga_pemeliharaan_lama = document.getElementById(
    "tenaga_pemeliharaan_lama"
  ).value;
  var tenaga_pemeliharaan_persen_lama = document.getElementById(
    "tenaga_pemeliharaan_persen_lama"
  ).value;
  var tenaga_pemeliharaan_value = 0;
  var tenaga_pemeliharaan_persen = 0;
  var panel = document.getElementById("panel_tenaga_pemeliharaan");

  $.ajax({
    type: "POST",
    url: "api/panel_tenaga_pemeliharaan.php",
    data: {
      tenaga_pemeliharaan_lama: tenaga_pemeliharaan_lama,
      id_unit_usaha: id_unit_usaha,
    },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      var tenaga_pemeliharaan_rkap = data["tenaga_pemeliharaan_rkap"];
      tenaga_pemeliharaan_value = data["tenaga_pemeliharaan_value"];
      tenaga_pemeliharaan_persen = data["tenaga_pemeliharaan_persen"];

      if (tenaga_pemeliharaan_persen >= tenaga_pemeliharaan_persen_lama) {
        document.getElementById("tenaga_pemeliharaan_icon").className =
          "far fa-arrow-alt-circle-up text-success label-berubah";
      } else if (tenaga_pemeliharaan_persen < tenaga_pemeliharaan_persen_lama) {
        document.getElementById("tenaga_pemeliharaan_icon").className =
          "far fa-arrow-alt-circle-down text-danger label-berubah";
      }

      var batas1 = tenaga_pemeliharaan_rkap - 20;
      var batas2 = tenaga_pemeliharaan_rkap + 20;

      if (tenaga_pemeliharaan_value <= batas1) {
        panel.className = "widget widget-one text-center danger-gradient";
      } else if (
        tenaga_pemeliharaan_value > batas1 &&
        tenaga_pemeliharaan_value < tenaga_pemeliharaan_rkap
      ) {
        panel.className = "widget widget-one text-center warning-gradient";
      } else if (
        tenaga_pemeliharaan_value >= tenaga_pemeliharaan_rkap &&
        tenaga_pemeliharaan_value <= batas2
      ) {
        panel.className = "widget widget-one text-center success-gradient";
      } else {
        panel.className = "widget widget-one text-center danger-gradient";
      }

      document.getElementById(
        "tenaga_pemeliharaan_lama"
      ).value = tenaga_pemeliharaan_value;
      document.getElementById(
        "tenaga_pemeliharaan_persen_lama"
      ).value = tenaga_pemeliharaan_persen;
      document.getElementById("tenaga_pemeliharaan_value").innerHTML =
        tenaga_pemeliharaan_value + " Orang";
      document.getElementById("tenaga_pemeliharaan_persen").innerHTML =
        tenaga_pemeliharaan_persen + "%";
    },
  });
}

// load panel bahan herbisida
function loadPanelBahanHerbisida() {
  var bahan_herbisida_lama = document.getElementById("bahan_herbisida_lama")
    .value;
  var bahan_herbisida_persen_lama = document.getElementById(
    "bahan_herbisida_persen_lama"
  ).value;
  var bahan_herbisida_value = 0;
  var bahan_herbisida_persen = 0;
  var panel = document.getElementById("panel_bahan_herbisida");

  $.ajax({
    type: "POST",
    url: "api/panel_bahan_herbisida.php",
    data: {
      bahan_herbisida_lama: bahan_herbisida_lama,
      id_unit_usaha: id_unit_usaha,
    },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      var bahan_herbisida_rkap = data["bahan_herbisida_rkap"];
      bahan_herbisida_value = data["bahan_herbisida_value"];
      bahan_herbisida_persen = data["bahan_herbisida_persen"];

      if (bahan_herbisida_persen >= bahan_herbisida_persen_lama) {
        document.getElementById("bahan_herbisida_icon").className =
          "far fa-arrow-alt-circle-up text-success label-berubah";
      } else if (bahan_herbisida_persen < bahan_herbisida_persen_lama) {
        document.getElementById("bahan_herbisida_icon").className =
          "far fa-arrow-alt-circle-down text-danger label-berubah";
      }

      var batas1 = bahan_herbisida_rkap - 20;
      var batas2 = bahan_herbisida_rkap + 20;

      if (bahan_herbisida_value <= batas1) {
        panel.className = "widget widget-one text-center danger-gradient";
      } else if (
        bahan_herbisida_value > batas1 &&
        bahan_herbisida_value < bahan_herbisida_rkap
      ) {
        panel.className = "widget widget-one text-center warning-gradient";
      } else if (
        bahan_herbisida_value >= bahan_herbisida_rkap &&
        bahan_herbisida_value <= batas2
      ) {
        panel.className = "widget widget-one text-center success-gradient";
      } else {
        panel.className = "widget widget-one text-center danger-gradient";
      }

      document.getElementById(
        "bahan_herbisida_lama"
      ).value = bahan_herbisida_value;
      document.getElementById(
        "bahan_herbisida_persen_lama"
      ).value = bahan_herbisida_persen;
      document.getElementById("bahan_herbisida_value").innerHTML =
        bahan_herbisida_value + " Liter";
      document.getElementById("bahan_herbisida_persen").innerHTML =
        bahan_herbisida_persen + "%";
    },
  });
}

// load panel realisasi
function loadPanelLuas() {
  var luas_lama = document.getElementById("luas_lama").value;
  var luas_persen_lama = document.getElementById("luas_persen_lama").value;
  var luas_value = 0;
  var luas_persen = 0;
  var panel = document.getElementById("panel_luas");

  $.ajax({
    type: "POST",
    url: "api/panel_luas_pemeliharaan.php",
    data: { luas_lama: luas_lama, id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      var luas_rkap = data["luas_rkap"];
      luas_value = data["luas_value"];
      luas_persen = data["luas_persen"];

      if (luas_persen >= luas_persen_lama) {
        document.getElementById("luas_icon").className =
          "far fa-arrow-alt-circle-up text-success label-berubah";
      } else if (luas_persen < luas_persen_lama) {
        document.getElementById("luas_icon").className =
          "far fa-arrow-alt-circle-down text-danger label-berubah";
      }

      var batas1 = luas_rkap - 20;
      var batas2 = luas_rkap + 20;

      if (luas_value <= batas1) {
        panel.className = "widget widget-one text-center danger-gradient";
      } else if (luas_value > batas1 && luas_value < luas_rkap) {
        panel.className = "widget widget-one text-center warning-gradient";
      } else if (luas_value >= luas_rkap && luas_value <= batas2) {
        panel.className = "widget widget-one text-center success-gradient";
      } else {
        panel.className = "widget widget-one text-center danger-gradient";
      }

      document.getElementById("luas_lama").value = luas_value;
      document.getElementById("luas_persen_lama").value = luas_persen;
      document.getElementById("luas_value").innerHTML = luas_value + " Ha";
      document.getElementById("luas_persen").innerHTML = luas_persen + "%";
    },
  });
}

// ajax grafik curah hujan
function loadPerbandinganInspeksi() {
  $.ajax({
    type: "POST",
    url: "api/grafik_line_perbandingan_inspeksi.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      var series = [];
      console.log(data["inspeksi"][0]["nama_inspeksi"]);
      for (let i = 0; i < data["inspeksi"].length; i++) {
        var seriesData = {
          name: data["inspeksi"][i]["nama_inspeksi"],
          data: data["inspeksi"][i]["grafik"],
        };
        series.push(seriesData);
      }
      // console.log(series);
      d_perbandinganInspeksi.updateSeries(series);
    },
  });
}

// ajax grafik PTT per afdeling
function loadPTT() {
  $.ajax({
    type: "POST",
    url: "api/grafik_kolom_ptt.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_ptt.updateSeries([
        {
          name: "PTT",
          data: data["ptt"],
        },
      ]);
    },
  });
}

// ajax grafik BMTD per afdeling
function loadBMTD() {
  $.ajax({
    type: "POST",
    url: "api/grafik_kolom_bmtd.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_bmtd.updateSeries([
        {
          name: "BMTD",
          data: data["bmtd"],
        },
      ]);
    },
  });
}

// ajax grafik BMD per afdeling
function loadBMD() {
  $.ajax({
    type: "POST",
    url: "api/grafik_kolom_bmd.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_bmd.updateSeries([
        {
          name: "BMD",
          data: data["bmd"],
        },
      ]);
    },
  });
}

// ajax grafik BTT per afdeling
function loadBTT() {
  $.ajax({
    type: "POST",
    url: "api/grafik_kolom_btt.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_btt.updateSeries([
        {
          name: "BTT",
          data: data["btt"],
        },
      ]);
    },
  });
}

// ajax grafik penggunaan bahan herbisida
function loadLineTenagaPemeliharaan() {
  $.ajax({
    type: "POST",
    url: "api/grafik_line_tenaga_pemeliharaan.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_tenagaPemeliharaanLine.updateSeries([
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

// ajax grafik penggunaan bahan herbisida
function loadLinePemupukan() {
  $.ajax({
    type: "POST",
    url: "api/grafik_line_pemupukan.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_pemupukanLine.updateSeries([
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

// ajax grafik penggunaan bahan herbisida
function loadLineBahanHerbisida() {
  $.ajax({
    type: "POST",
    url: "api/grafik_line_bahan_herbisida.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_bahanHerbisidaLine.updateSeries([
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

// ajax grafik capaian luas pemeliharaan
function loadLuasPemeliharaan() {
  $.ajax({
    type: "POST",
    url: "api/grafik_line_luas_pemeliharaan.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_luasPemeliharaanUnit.updateSeries([
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

// Ajax pie luas_pemeliharaan
function loadPieLuasPemeliharaan() {
  $.ajax({
    type: "POST",
    url: "api/grafik_pie_luas_pemeliharaan.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      // console.log(data);
      d_luasPemeliharaan.updateSeries(data);
    },
  });
}

// Ajax pie bahan_herbisida
function loadPieBahanHerbisida() {
  $.ajax({
    type: "POST",
    url: "api/grafik_pie_bahan_herbisida.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      // console.log(data);
      d_bahanHerbisida.updateSeries(data);
    },
  });
}

// Ajax pie pemupukan
function loadPiePemupukan() {
  $.ajax({
    type: "POST",
    url: "api/grafik_pie_pemupukan.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      // console.log(data);
      d_piePemupukan.updateSeries(data);
    },
  });
}

// Ajax pie pemupukan
function loadPieTenagaPemeliharaan() {
  $.ajax({
    type: "POST",
    url: "api/grafik_pie_tenaga_pemeliharaan.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      // console.log(data);
      d_pieTenagaPemeliharaan.updateSeries(data);
    },
  });
}

// ajax grafik bar inspeksi panen
function loadBarInspeksiPanen() {
  $.ajax({
    type: "POST",
    url: "api/grafik_bar_inspeksi_panen.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_barInspeksiPanen.updateSeries([
        {
          name: "Inspeksi Panen",
          data: data["inspeksi_panen"],
        },
      ]);
    },
  });
}

function updateDasbor() {
  var lastUpdate = document.getElementById("last-update");
  var currentdate = new Date();
  var datetime =
    "Last Updated: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  lastUpdate.innerText = datetime;
}

// Ajax all load
function loadAllPemeliharaan() {
  updateDasbor();
  loadPanelBahanPupuk();
  loadPanelTenagaPemeliharaan();
  loadPanelBahanHerbisida();
  loadPanelLuas();
  loadPerbandinganInspeksi();
  loadPTT();
  loadBMTD();
  loadBMD();
  loadBTT();
  loadBarInspeksiPanen();
  loadPiePemupukan();
  loadPieTenagaPemeliharaan();
  loadPieLuasPemeliharaan();
  loadPieBahanHerbisida();
  loadLinePemupukan();
  loadLineTenagaPemeliharaan();
  loadLuasPemeliharaan();
  loadLineBahanHerbisida();
  //   console.log("Loaded");
}

var id_unit_usaha = document.getElementById("id_unit_usaha").value;
