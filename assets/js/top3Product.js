var allData;
var ageRange;
$.ajax({
	    url: 'https://api.awsfox.com/revenueCategory/3',
	    global: false,
	    cache: false,
	    type: "get",
	    contentType: 'application/json',
		  dataType: "json",
		success: function(rs) {
			var result = rs;
      ageRange=result[0].ageRange;
      allData=result[0].data;
      drawTop3BarChart(ageRange,allData);
		},
		error: function(){
			//alert('系統錯誤，請重新整理');
		}
	});

function drawTop3BarChart(ageRange,allData){
  Highcharts.chart('top3', {
      colors: ['#FAA05A', '#2FA2F4','#F7652B'],
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Top 3 Product Categories by Revenue and Age'
      },

      xAxis: {
          categories:ageRange
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
      series:allData
  });

}
