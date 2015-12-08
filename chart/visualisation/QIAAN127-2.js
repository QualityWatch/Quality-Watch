/* Created by EFisher on 03/12/2015 13:09:34 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the distribution of sickness absence changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013,2014]
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
visible: true,type: 'column',
data: [46.1,44.4,42.4,46.5]
,index: 5
},
{
name: '1 to 4',
visible: false,type: 'column',
data: [23.9,22.8,23.4,22.3]
,index: 4
},
{
name: '4.1 to 10',
visible: false,type: 'column',
data: [9.9,12.9,13.2,12.2]
,index: 3
},
{
name: '10.1 to 20',
visible: false,type: 'column',
data: [7.9,7.6,7.7,7.1]
,index: 2
},
{
name: '20.1 to 40',
visible: false,type: 'column',
data: [5.7,5.6,6.2,5.4]
,index: 1
},
{
name: 'More than 40',
visible: false,type: 'column',
data: [6.6,6.7,7,6.5]
,index: 0
}
]
}
