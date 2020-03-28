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