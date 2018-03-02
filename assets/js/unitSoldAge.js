
Highcharts.chart('soldAge', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Units sold by Age'
    },
    xAxis: {
        categories: ['0-5', '6-10', '11-15', '16-20', '21-25','26-30', '31-35', '36-40', '41-45','46-50', '51-55','55+',]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'revenue'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Female',
        data: [5, 3, 4, 7, 2, 3, 4, 4, 2, 5, 2, 1]
    }, {
        name: 'Male',
        data: [2, 2, 3, 2, 1 , 6, 5 ,3 ,4, 3, 2, 1]
    // }, {
    //     name: 'Joe',
    //     data: [3, 4, 4, 2, 5]
    }]
});
