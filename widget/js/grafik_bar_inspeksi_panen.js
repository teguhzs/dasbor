var optionsBarInspeksiPanen = {
    chart: {
        height: 160,
        type: 'bar',
        toolbar: {
            show: false,
        },
        stacked: false
    },
    plotOptions: {
        bar: {
            horizontal: true,
            endingShape: 'flat',
            barHeight: '60%',
        }
    },
    colors: ['#0ac73c', '#c7170a'],
    // colors: ['#0032fc', '#ffdb3b', '#E91E63', '#9C27B0', ],
    series: [{
        name: "",
        data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    }],
    xaxis: {
        categories: ['BTT', 'BMD', 'BMTD', 'PTT'],
    },
    grid: {
        yaxis: {
            lines: {
                show: false
            }
        },
        xaxis: {
            lines: {
                show: false
            }
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    },
    fill: {
        type: 'solid',
        opacity: 1
        // colors: ['#F44336', '#E91E63', '#9C27B0', '#9C27B0']
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + ""
        },
        style: {
            fontSize: '20px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold'
            // colors: ['#1100ff']
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

var d_barInspeksiPanen = new ApexCharts(
    document.querySelector("#barInspeksiPanen"),
    optionsBarInspeksiPanen
);

d_barInspeksiPanen.render();