Highcharts.chart('top3', {
    colors: ['#FAA05A', '#2FA2F4','#F7652B'],
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Top 3 Product Categories by Revenue and Age'
    },

    xAxis: {
        categories: ['0-15', '16-30', '31-45', '45+']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total revenue'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Laptops',
        data: [5, 3, 4, 7]
    }, {
        name: 'Desktops',
        data: [2, 2, 3, 2]
    }, {
        name: 'TV',
        data: [3, 4, 4, 2]
    }]
});
