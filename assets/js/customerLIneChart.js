
Highcharts.chart('customerAmount', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Taipei Central'
    },
    subtitle: {
        text: 'Thing requests'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Visit'
        // },
        // labels: {
        //     formatter: function () {
        //         return this.value + '°';
        //     }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Request',
        marker: {
            symbol: 'square'
        },
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 23.3, 18.3, 13.9, 9.6]

    // }, {
    //     name: 'London',
    //     marker: {
    //         symbol: 'diamond'
    //     },
    //     data: [4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
});
