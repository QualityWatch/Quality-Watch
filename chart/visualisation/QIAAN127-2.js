/* Created by ianb on 07/05/2014 13:26:26 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the distribution of sickness absence changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of sickness days for <br> all staff roles', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: '0',
type: 'column',
data: [46.1,44.4,42.4]
,index: 5
},
{
name: '1 to 4',
visible: false,type: 'column',
data: [23.9,22.8,23.4]
,index: 4
},
{
name: '4.1 to 10',
visible: false,type: 'column',
data: [9.9,12.9,13.2]
,index: 3
},
{
name: '10.1 to 20',
visible: false,type: 'column',
data: [7.9,7.6,7.7]
,index: 2
},
{
name: '20.1 to 40',
visible: false,type: 'column',
data: [5.7,5.6,6.2]
,index: 1
},
{
name: 'More than 40',
visible: false,type: 'column',
data: [6.6,6.7,7]
,index: 0
}
]
}
