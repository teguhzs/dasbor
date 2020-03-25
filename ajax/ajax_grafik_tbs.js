window.setInterval(function () {
    $.ajax({
        type: "POST",
        url: "api/grafik_tbs.php",
        data: "data",
        dataType: "JSON",
        success: function (data) {
            console.log(data['']);
            d_tbs.updateSeries([{
                name: 'Realisasi',
                data: data['hari_ini']
            }, {
                name: 'RKAP',
                data: data['tertinggi']
            }]);
        }
    });
}, 3000)