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
    data: "data",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_tenagaPemeliharaanLine.updateSeries([
        {
          name: "Realisasi",
          data: data["rkap"],
        },
        {
          name: "RKAP",
          data: data["realisasi"],
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
    data: "data",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_pemupukanLine.updateSeries([
        {
          name: "Realisasi",
          data: data["rkap"],
        },
        {
          name: "RKAP",
          data: data["realisasi"],
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
    data: "data",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_bahanHerbisidaLine.updateSeries([
        {
          name: "Realisasi",
          data: data["rkap"],
        },
        {
          name: "RKAP",
          data: data["realisasi"],
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
    data: "data",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_luasPemeliharaanUnit.updateSeries([
        {
          name: "Realisasi",
          data: data["rkap"],
        },
        {
          name: "RKAP",
          data: data["realisasi"],
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
    data: "data",
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
    data: "data",
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
    data: "data",
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
    data: "data",
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

// Ajax all load
function loadAllPemeliharaan() {
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
