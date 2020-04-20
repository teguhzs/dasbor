// ajax grafik bar inspeksi panen
function loadInspeksiPanen() {
  $.ajax({
    type: "POST",
    url: "api/grafik_bar_inspeksi_panen_all.php",
    data: "data",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_grafik_inspeksi_panen_all.updateSeries([
        {
          name: "BTT",
          data: data["BTT"],
        },
        {
          name: "BMD",
          data: data["BMD"],
        },
        {
          name: "BMTD",
          data: data["BMTD"],
        },
        {
          name: "PTT",
          data: data["PTT"],
        },
      ]);
    },
  });
}

// ajax grafik kolom produksi
function loadProduksiUnitUsaha() {
  $.ajax({
    type: "POST",
    url: "api/grafik_kolom_produksi_unit_usaha.php",
    data: "data",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_produksi_unit_usaha.updateSeries([
        {
          name: "Produksi",
          data: data["produksi"],
        },
      ]);
    },
  });
}

// ajax grafik perbandingan produksi
function loadPencapaianProduksi() {
  $.ajax({
    type: "POST",
    url: "api/grafik_line_pencapaian.php",
    data: "data",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      d_capaianProduksi.updateSeries([
        {
          name: "RKAP",
          type: "column",
          data: data["rkap"],
        },
        {
          name: "Pencapaian",
          type: "column",
          data: data["pencapaian"],
        },
        {
          name: "Indeks Pencapaian per Tahun",
          type: "line",
          data: data["pencapaian"],
        },
      ]);
    },
  });
}

// Ajax all load
function loadAllDasborUtama() {
  loadInspeksiPanen();
  loadProduksiUnitUsaha();
  loadPencapaianProduksi();
  console.log("Loaded");
}
