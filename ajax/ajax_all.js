// ajax grafik curah hujan
function loadCurahHujan() {
    $.ajax({
        type: "POST",
        url: "api/grafik_line_curah_hujan.php",
        data: "data",
        dataType: "JSON",
        success: function (data) {
            var series = [];
            for (let i = 0; i < data['curah_hujan'].length; i++) {
                var seriesData = {
                    name: 'Afdeling ' + i,
                    data: data['curah_hujan'][i][i + 1]
                };
                series.push(seriesData);
            }
            // console.log(series);
            d_curah_hujan.updateSeries(series);
        }
    });
}

// ajax grafik Restan
function loadRestan() {
    $.ajax({
        type: "POST",
        url: "api/grafik_kolom_restan.php",
        data: "data",
        dataType: "JSON",
        success: function (data) {
            console.log(data);
            d_restan.updateSeries([{
                name: 'Restan',
                data: data['restan']
            }]);
        }
    });
}

// ajax grafik perbandingan produksi
function loadPerbandinganProduksi() {
    $.ajax({
        type: "POST",
        url: "api/grafik_line_perbandingan.php",
        data: "data",
        dataType: "JSON",
        success: function (data) {
            console.log(data);
            d_perbandingan.updateSeries([{
                name: 'Realisasi',
                data: data['rkap']
            }, {
                name: 'RKAP',
                data: data['realisasi']
            }]);
        }
    });
}

// ajax grafik TBS
function loadTenagaPanen() {
    $.ajax({
        type: "POST",
        url: "api/grafik_tenaga_panen.php",
        data: "data",
        dataType: "JSON",
        success: function (data) {
            console.log(data);
            d_tenaga_panen.updateSeries([{
                name: 'Realisasi',
                data: data['rkap']
            }, {
                name: 'RKAP',
                data: data['realisasi']
            }]);
        }
    });
}

// ajax grafik TBS
function loadTbs() {
    $.ajax({
        type: "POST",
        url: "api/grafik_tbs.php",
        data: "data",
        dataType: "JSON",
        success: function (data) {
            console.log(data);
            d_tbs.updateSeries([{
                name: 'Realisasi',
                data: data['rkap']
            }, {
                name: 'rkap',
                data: data['realisasi']
            }]);
        }
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
        }
    });
}

// Ajax all load
function loadAll() {
    loadCurahHujan();
    loadRestan();
    loadTbs();
    loadAncak();
    loadTenagaPanen();
    loadPerbandinganProduksi();
}