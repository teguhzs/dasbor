Highcharts.chart(
  "gaugeTlb",
  {
    chart: {
      type: "gauge",
      plotBackgroundColor: "transparent",
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      backgroundColor: "transparent",
      plotShadow: false
    },

    title: {
      text: ""
    },

    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [
        {
          backgroundColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, "#FFF"],
              [1, "#333"]
            ]
          },
          borderWidth: 0,
          outerRadius: "109%"
        },
        {
          backgroundColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, "#333"],
              [1, "#FFF"]
            ]
          },
          borderWidth: 1,
          outerRadius: "107%"
        },
        {
          // default background
        },
        {
          backgroundColor: "#DDD",
          borderWidth: 0,
          outerRadius: "105%",
          innerRadius: "103%"
        }
      ]
    },

    // the value axis
    yAxis: {
      min: 0,
      max: 100,

      minorTickInterval: "auto",
      minorTickWidth: 1,
      minorTickLength: 10,
      minorTickPosition: "inside",
      minorTickColor: "#666",

      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: "inside",
      tickLength: 10,
      tickColor: "#666",
      labels: {
        step: 2,
        rotation: "auto"
      },
      title: {
        text: "TLB",
        style: {
          color: "#858585",
          fontFamily:
            '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
          fontSize: "18px",
          fontWeight: "bold",
          fill: "#6d869f"
        },
        y: 90,
        x: 0
      },
      plotBands: [
        {
          from: 0,
          to: 90,
          color: "#DF5353" // green
        },
        // {
        //   from: 120,
        //   to: 160,
        //   color: "#DDDF0D" // yellow
        // },
        {
          from: 90,
          to: 100,
          color: "#55BF3B" // red
        }
      ]
    },

    series: [
      {
        name: "Speed",
        data: [80],
        tooltip: {
          valueSuffix: " km/h"
        },
        dataLabels: {
          enabled: true,
          color: "#000",
          allowOverlap: true,
          format: "{y}%",
          crop: false,
          padding: 5,
          style: {
            //fontWeight:'bold',
            fontSize: "18px"
          },
          y: 5
        }
      }
    ],

    exporting: {
      buttons: {
        contextButton: {
          enabled: false
        }
      }
    },
    credits: {
      enabled: false
    }
  },
  // Add some life
  function(chart) {
    if (!chart.renderer.forExport) {
      setInterval(function() {
        var point = chart.series[0].points[0],
          newVal,
          inc = Math.round((Math.random() - 0.5) * 20);

        newVal = point.y + inc;
        if (newVal < 0 || newVal > 200) {
          newVal = point.y - inc;
        }

        point.update(newVal);
      }, 3000);
    }
  }
);
