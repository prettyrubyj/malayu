//WidgetChart 1
var ctx = document.getElementById( "traffic_wg" );
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


//WidgetChart 2
var ctx = document.getElementById( "sales_wg" );
ctx.height = 150;
var myChart = new Chart( ctx, {
    type: 'line',
    data: {
        labels: ['2/23', '2/24', '2/25', '2/26', '2/27', '2/28', '3/1'],
        type: 'line',
        datasets: [ {
            data: [1, 18, 9, 17, 34, 22, 11],
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
