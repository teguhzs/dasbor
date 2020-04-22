var optionsGrafikCurahHujanAfdeling = {
    series: [],
    chart: {
        height: 242,
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
    colors: ['#e30000', '#0fe300', '#0048e3', '#e300c9', '#00d8e3', '#8800e3'],
    dataLabels: {
        enabled: false,
    },
    fill: {
        type: "gradient",
        // opacity: 1,
        gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.5,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
        }

    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
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
    title: {
        text: 'Curah Hujan Afdeling',
        align: 'left',
        margin: 10,
        floating: true,
        style: {
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: undefined,
            color: '#fff'
        },
    },
    markers: {
        size: 3,
        strokeOpacity: 0.5,
        fillOpacity: 0.5,
        shape: "square"
    },
    yaxis: {
        tickAmount: 4,
        labels: {
            show: true,
            align: 'right',
            style: {
                fontSize: '20px',
                fontFamily: 'Helvetica, Arial, sans-serif',
            },
        },
    },
    xaxis: {
        labels: {
            show: true,
            align: 'right',
            style: {
                fontSize: '20px',
                fontFamily: 'Helvetica, Arial, sans-serif',
            },
        },
    },
    legend: {
        position: 'top',
        fontSize: '20px',
        horizontalAlign: 'right',
        floating: false,
        offsetY: 0,
        offsetX: 0
    }
};

var d_curah_hujan = new ApexCharts(document.querySelector("#grafikCurahHujanAfdeling"), optionsGrafikCurahHujanAfdeling);
d_curah_hujan.render();