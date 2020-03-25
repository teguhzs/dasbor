var optionsAncak = {
    series: [90, 44],
    chart: {
        // width: 380,
        height: 365,
        type: 'pie',
    },
    colors: ['#00ff2f', '#fff800'],
    // colors: ['#e30000', '#08e300'],
    labels: ['Belum di Realisasi', 'Telah di Realisasi'],
    legend: {
        position: 'bottom',
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'top'
            }
        }
    }],
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: "#010836",
        width: 5,
        dashArray: 0,
    },
    dataLabels: {
        style: {
            fontSize: '25px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
        },
        dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
        },

    },
    fill: {
        type: 'gradient',
        opacity: 0.9
    }
};

var d_ancak = new ApexCharts(document.querySelector("#pieKetuntasanAncak"), optionsAncak);
d_ancak.render();