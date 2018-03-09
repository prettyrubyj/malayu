// Build the chart
var alldata;
$.ajax({
	    url: 'https://api.awsfox.com/trans',
	    global: false,
	    cache: false,
	    type: "get",
	    contentType: 'application/json',
		  dataType: "json",
		success: function(rs) {
			var result = rs;
      allData=result[0].data;
			//console.log(result[0].data);
      drawPieChart(allData);
		},
		error: function(){
			//alert('系統錯誤，請重新整理');
		}
	});

// alldata=[
// {
// name: "P1",
// y: 1075
// },
// {
// name: "VP",
// y: 1048
// },
// {
// name: "RW",
// y: 1039
// },
// {
// name: "PSN",
// y: 708
// },
// {
// name: "TRA",
// y: 591
// },
// {
// name: "VC",
// y: 330
// },
// {
// name: "SAM",
// y: 289
// },
// {
// name: "PLP",
// y: 196
// },
// {
// name: "PDV",
// y: 190
// },
// {
// name: "ADS",
// y: 185
// }
// ];
// console.log(alldata);
  function drawPieChart(allData){
    Highcharts.chart('categoryRevenue', {
        //colors: ['#FAA05A', '#2FA2F4','#F7652B'],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Revenue by Product Category'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
              name: 'Brands',
              colorByPoint: true,
              data: allData
              // data: [{
              //     name: 'Microsoft Internet Explorer',
              //     y: 56.33
              // }, {
              //     name: 'Chrome',
              //     y: 24.03,
              //     sliced: true,
              //     selected: true
              // }, {
              //     name: 'Firefox',
              //     y: 10.38
              // }]
          }]
      });
  }
