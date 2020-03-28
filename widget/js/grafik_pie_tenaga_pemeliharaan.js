var optionsPieTenagaPemeliharaan = {
    series: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    chart: {
        // width: 380,
        height: 175,
        type: 'pie',
    },
    colors: ['#0ac73c', '#c7170a'],
    // colors: ['#0032fc', '#fc002a'],
    // colors: ['#00ff2f', '#fff800'],
    // colors: ['#e30000', '#08e300'],
    labels: ['Realisasi', 'RKAP'],
    legend: {
        position: 'right',
        floating: false,
        fontSize: '10px'
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
        colors: "#010836",
        width: 0,
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
        type: 'solid',
        opacity: 1
    }
};

var d_pieTenagaPemeliharaan = new ApexCharts(document.querySelector("#pieTenagaPemeliharaan"), optionsPieTenagaPemeliharaan);
d_pieTenagaPemeliharaan.render();