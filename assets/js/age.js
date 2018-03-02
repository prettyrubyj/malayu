// Data gathered from http://populationpyramid.net/germany/2015/

// Age categories
var categories = [
    '0-5', '6-10', '11-15', '16-20',
    '21-25', '26-30', '31-35', '36-40', '41-45',
    '46-50', '51-55', '55+'
];

Highcharts.chart('age', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Age'
    },
    // subtitle: {
    //     text: 'Source: <a href="http://populationpyramid.net/germany/2015/">Population Pyramids of the World from 1950 to 2100</a>'
    // },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },

    series: [{
        name: 'Male',
        data: [-2.2, -2.2, -2.3, -2.5, -2.7, -3.1, -3.2,
            -3.0, -3.2, -4.3, -4.4, -3.6]
    }, {
        name: 'Female',
        data: [2.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9,
            3.1, 4.1, 4.3, 3.6]
    }]
});
