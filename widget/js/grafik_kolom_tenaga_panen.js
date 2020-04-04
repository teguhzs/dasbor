var optionsTenagaPanen = {
    series: [],
    chart: {
        type: 'bar',
        height: 365,
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    stroke: {
        curve: 'straight'
    },
    colors: ['#00ff2f', '#fff800'],
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    grid: {
        borderColor: '#404040',
        strokeDashArray: 6,
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
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + ""
        },
        style: {
            fontSize: '20px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            colors: ['#1100ff']
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    // xaxis: {
    //     categories: ['Afdeling 1', 'Afdeling 2', 'Afdeling 3', 'Afdeling 4', 'Afdeling 5', 'Afdeling 6'],
    // },
    legend: {
        position: 'top',
    },
    fill: {
        type: "solid",
        opacity: 1
    }
};

var d_tenaga_panen = new ApexCharts(document.querySelector("#grafikTenagaPanen"), optionsTenagaPanen);
d_tenaga_panen.render();