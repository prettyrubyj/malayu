// Build the chart
var trafficData;
var trafficDate;

//取traffic 資料
$.ajax({
	    url: 'http://api.awsfox.com/dailySales/7',
	    global: false,
	    cache: false,
	    type: "get",
	    contentType: 'application/json',
		  dataType: "json",
		success: function(rs) {
			var result = rs;
      trafficDate=result[0].date;
      trafficData=result[0].data;
      document.getElementById('trafficCount').innerHTML=result[0].salesAmount;
      //轉換百分比為正負值，用百分比減100可得當日比昨日上升或減少，取到小數第二位
      percentOri=result[0].percentage.split("%",1);
      percentNew=((percentOri-100).toFixed(2)).toString()+"%";
      document.getElementById('trafficPersent').innerHTML=percentNew;
      drawTraffic(trafficDate,trafficData);
		},
		error: function(){
			//alert('系統錯誤，請重新整理');
		}
	});

//取sales 資料
  $.ajax({
  	    url: 'http://api.awsfox.com/dailyCustomer/7',
  	    global: false,
  	    cache: false,
  	    type: "get",
  	    contentType: 'application/json',
  		  dataType: "json",
  		success: function(rs) {
  			var result = rs;
        salesDate=result[0].date;
        salesData=result[0].data;
        document.getElementById('salesCount').innerHTML=result[0].customerAmount;
        //轉換百分比為正負值，用百分比減100可得當日比昨日上升或減少，取到小數第二位
        percentOri=result[0].percentage.split("%",1);
        percentNew=((percentOri-100).toFixed(2)).toString()+"%";
        document.getElementById('salesPersent').innerHTML=percentNew;
        drawSales(salesDate,salesData);
  		},
  		error: function(){
  			//alert('系統錯誤，請重新整理');
  		}
  	});

//WidgetChart 1
function drawTraffic(trafficDate,trafficData){
  var ctx = document.getElementById( "traffic_wg" );
  ctx.height = 150;
  var myChart = new Chart( ctx, {
      type: 'line',
      data: {
          //labels: ['2/23', '2/24', '2/25', '2/26', '2/27', '2/28', '3/1'],
          labels: trafficDate,
          type: 'line',
          datasets: [ {
              //data: [65, 59, 84, 84, 51, 55, 40],
              data:trafficData,
              label: 'Dataset',
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,.55)',
          }, ]
      },
      options: {

          maintainAspectRatio: false,
          legend: {
              display: false
          },
          responsive: true,
          tooltips: {
              mode: 'index',
              titleFontSize: 12,
              titleFontColor: '#000',
              bodyFontColor: '#000',
              backgroundColor: '#fff',
              titleFontFamily: 'Montserrat',
              bodyFontFamily: 'Montserrat',
              cornerRadius: 3,
              intersect: false,
          },
          scales: {
              xAxes: [ {
                  gridLines: {
                      color: 'transparent',
                      zeroLineColor: 'transparent'
                  },
                  ticks: {
                      fontSize: 2,
                      fontColor: 'transparent'
                  }
              } ],
              yAxes: [ {
                  display:false,
                  ticks: {
                      display: false,
                  }
              } ]
          },
          title: {
              display: false,
          },
          elements: {
              line: {
                  borderWidth: 1
              },
              point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4
              }
          }
      }
  } );
}



//WidgetChart 2
function drawSales(salesDate,salesData){
  var ctx = document.getElementById( "sales_wg" );
  ctx.height = 150;
  var myChart = new Chart( ctx, {
      type: 'line',
      data: {
          //labels: ['2/23', '2/24', '2/25', '2/26', '2/27', '2/28', '3/1'],
          labels:salesDate,
          type: 'line',
          datasets: [ {
              //data: [1, 18, 9, 17, 34, 22, 11],
              data:salesData,
              label: 'Dataset',
              backgroundColor: '#63c2de',
              borderColor: 'rgba(255,255,255,.55)',
          }, ]
      },
      options: {

          maintainAspectRatio: false,
          legend: {
              display: false
          },
          responsive: true,
          tooltips: {
              mode: 'index',
              titleFontSize: 12,
              titleFontColor: '#000',
              bodyFontColor: '#000',
              backgroundColor: '#fff',
              titleFontFamily: 'Montserrat',
              bodyFontFamily: 'Montserrat',
              cornerRadius: 3,
              intersect: false,
          },
          scales: {
              xAxes: [ {
                  gridLines: {
                      color: 'transparent',
                      zeroLineColor: 'transparent'
                  },
                  ticks: {
                      fontSize: 2,
                      fontColor: 'transparent'
                  }
              } ],
              yAxes: [ {
                  display:false,
                  ticks: {
                      display: false,
                  }
              } ]
          },
          title: {
              display: false,
          },
          elements: {
              line: {
                  tension: 0.00001,
                  borderWidth: 1
              },
              point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4
              }
          }
      }
  } );
}



//WidgetChart 3
var ctx = document.getElementById( "conversion_wg" );
ctx.height = 150;
var myChart = new Chart( ctx, {
    type: 'line',
    data: {
        labels: ['2/23', '2/24', '2/25', '2/26', '2/27', '2/28', '3/1'],
        type: 'line',
        datasets: [ {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
        }, ]
    },
    options: {

        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
        },
        scales: {
            xAxes: [ {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            } ],
            yAxes: [ {
                display:false,
                ticks: {
                    display: false,
                }
            } ]
        },
        title: {
            display: false,
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
} );

//WidgetChart 4
var ctx = document.getElementById( "shopperYield_wg" );
ctx.height = 150;
var myChart = new Chart( ctx, {
    type: 'line',
    data: {
        labels: ['2/23', '2/24', '2/25', '2/26', '2/27', '2/28', '3/1'],
        type: 'line',
        datasets: [ {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
        }, ]
    },
    options: {

        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
        },
        scales: {
            xAxes: [ {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            } ],
            yAxes: [ {
                display:false,
                ticks: {
                    display: false,
                }
            } ]
        },
        title: {
            display: false,
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
} );

//WidgetChart 5
var ctx = document.getElementById( "captureRate_wg" );
ctx.height = 150;
var myChart = new Chart( ctx, {
    type: 'line',
    data: {
        labels: ['2/23', '2/24', '2/25', '2/26', '2/27', '2/28', '3/1'],
        type: 'line',
        datasets: [ {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
        }, ]
    },
    options: {

        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
        },
        scales: {
            xAxes: [ {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            } ],
            yAxes: [ {
                display:false,
                ticks: {
                    display: false,
                }
            } ]
        },
        title: {
            display: false,
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
} );

//WidgetChart 6
var ctx = document.getElementById( "newShoppers_wg" );
ctx.height = 150;
var myChart = new Chart( ctx, {
    type: 'line',
    data: {
        labels: ['2/23', '2/24', '2/25', '2/26', '2/27', '2/28', '3/1'],
        type: 'line',
        datasets: [ {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
        }, ]
    },
    options: {

        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
        },
        scales: {
            xAxes: [ {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            } ],
            yAxes: [ {
                display:false,
                ticks: {
                    display: false,
                }
            } ]
        },
        title: {
            display: false,
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
} );
