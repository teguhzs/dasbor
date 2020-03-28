var grafikPemupukan = {
    series: [{
            name: "Realisasi",
            data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
            name: "RKAP",
            data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ],
    chart: {
        height: 160,
        type: 'line',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#0ac73c', '#c7170a'],
    // colors: ['#0fe300', '#fff800', '#0048e3', '#e300c9', '#00d8e3', '#8800e3'],
    // dataLabels: {
    //     formatter: function (val) {
    //         return val + " Ton"
    //     },
    //     enabled: true,
    // },
    fill: {
        type: "solid"
    },
    stroke: {
        curve: 'straight',
        width: 3
    },
    grid: {
        borderColor: '#404040',
        strokeDashArray: 0,
        yaxis: {
            lines: {
                show: true
            }
        },
        xaxis: {
            lines: {
                show: false
            }
        }
    },
    markers: {
        size: 1
    },
    xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '8', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: 0,
        offsetX: -5
    }
};

var d_pemupukan = new ApexCharts(document.querySelector("#grafikPemupukan"), grafikPemupukan);
d_pemupukan.render();