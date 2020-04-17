var grafikProduksi = {
    chart: {
        height: 300,
        type: 'bar',
        toolbar: {
            show: false,
        },
        stacked: true
    },
    plotOptions: {
        bar: {
            horizontal: true,
            endingShape: 'flat',
            barHeight: '80%',
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#15ff00', '#ffdb3b'],
    series: [{
        name: "Hari Ini",
        data: [Math.floor(Math.random() * 5000), Math.floor(Math.random() * 5000), Math.floor(Math.random() * 5000), Math.floor(Math.random() * 5000), Math.floor(Math.random() * 5000), Math.floor(Math.random() * 5000)]
    }, {
        name: "Produksi Tertinggi",
        data: [Math.floor(Math.random() * 5000), Math.floor(Math.random() * 5000), Math.floor(Math.random() * 5000), Math.floor(Math.random() * 5000), Math.floor(Math.random() * 5000), Math.floor(Math.random() * 5000)]
    }],
    xaxis: {
        categories: ['Afdeling 1', 'Afdeling 2', 'Afdeling 3', 'Afdeling 4', 'Afdeling 5', 'Afdeling 6'],
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + " Kg"
        },
        dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
        }
    }
}

var d_produksi = new ApexCharts(
    document.querySelector("#idxProduksi"),
    grafikProduksi
);

d_produksi.render();