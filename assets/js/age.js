// Data gathered from http://populationpyramid.net/germany/2015/
var allData;
var ageRange;
$.ajax({
	    url: 'http://api.awsfox.com/users/analysis',
	    global: false,
	    cache: false,
	    type: "get",
	    contentType: 'application/json',
		  dataType: "json",
		success: function(rs) {
			var result = rs;
      ageRange=result[0].ageRange;
      allData=result[0].data;
      drawAgeBarChart(ageRange,allData);
		},
		error: function(){
			//alert('系統錯誤，請重新整理');
		}
	});


// Age categories
function drawAgeBarChart(ageRange,allData){
  var categories =ageRange;
  Highcharts.chart('age', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Age'
      },
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
      series:allData
  });
}
