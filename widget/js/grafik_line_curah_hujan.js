var optionsGrafikCurahHujanAfdeling = {
    series: [{
            name: "Afdeling 1",
            data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 0, 0, 0, 0, 0, 0, 0, 0, 0]

        },
        {
            name: "Afdeling 2",
            data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 0, 0, 0, 0, 0, 0, 0, 0, 0]

        },
        {
            name: "Afdeling 3",
            data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 0, 0, 0, 0, 0, 0, 0, 0, 0]

        },
        {
            name: "Afdeling 4",
            data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 0, 0, 0, 0, 0, 0, 0, 0, 0]

        },
        {
            name: "Afdeling 5",
            data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 0, 0, 0, 0, 0, 0, 0, 0, 0]

        },
        {
            name: "Afdeling 6",
            data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 0, 0, 0, 0, 0, 0, 0, 0, 0]

        }
    ],
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
        type: "gradient"
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
            fontSize: '14px',
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
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    },
    yaxis: {
        tickAmount: 4,
    },
    legend: {
        position: 'top',
        fontSize: '13px',
        horizontalAlign: 'right',
        floating: false,
        offsetY: 0,
        offsetX: 0
    }
};

var d_curah_hujan = new ApexCharts(document.querySelector("#grafikCurahHujanAfdeling"), optionsGrafikCurahHujanAfdeling);
d_curah_hujan.render();