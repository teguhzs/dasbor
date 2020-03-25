var grafikTbs = {
    chart: {
        height: 365,
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
            barHeight: '70%',
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: "solid",
        opacity: 1
    },
    colors: ['#00ff2f', '#fff800'],
    series: [],
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    },
    grid: {
        borderColor: '#404040',
        strokeDashArray: 6,
        yaxis: {
            lines: {
                show: false
            }
        },
        xaxis: {
            lines: {
                show: true
            }
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + " Kg"
        },
        style: {
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 500,
            colors: ['#1100ff']
        }
    }
}

var d_tbs = new ApexCharts(
    document.querySelector("#tandanBuahSegar"),
    grafikTbs
);

d_tbs.render();