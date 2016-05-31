{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the distribution of sickness absence changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013,2014,2015]
, labels: {
}
},
yAxis: {
max:10000,
title: {text:'Percentage of sickness days for <br> all staff roles', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value/100 +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: '0',
visible: true,type: 'column',
data: [4600,4400,4200,4600,4500]
,index: 5
},
{
name: '1 to 4',
visible: false,type: 'column',
data: [2400,2300,2300,2200,2200]
,index: 4
},
{
name: '4.1 to 10',
visible: false,type: 'column',
data: [1000,1300,1300,1200,1300]
,index: 3
},
{
name: '10.1 to 20',
visible: false,type: 'column',
data: [800,800,800,700,700]
,index: 2
},
{
name: '20.1 to 40',
visible: false,type: 'column',
data: [600,600,600,500,600]
,index: 1
},
{
name: 'More than 40',
visible: false,type: 'column',
data: [700,700,700,600,700]
,index: 0
}
]
}
