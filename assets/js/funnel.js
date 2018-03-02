

Highcharts.chart('funnel', {
    colors: ['#5290E9', '#71B37C','#EC9739','#E14E57'],
    chart: {
        type: 'funnel'
    },
    title: {
        text: 'Sales funnel'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                softConnector: true
            },
            center: ['45%', '50%'],
            neckWidth: '30%',
            neckHeight: '25%',
            width: '60%'
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Unique users',
        data: [
            ['Users', 100],
            ['Leads', 31],
            ['Opportunities', 3.7],
            ['wins', 0.7]
        ]
    }]
});
