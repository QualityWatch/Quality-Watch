/* Created by ianb on 07/05/2014 13:26:08 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Distribution of adult social service jobs by service group'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Percentage change in numbers of <br> whole time equivalent', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Direct care',
type: 'line',
data: [0,-6.1,-17.9]
,index: 1
},
{
name: 'Manager, Supervisor',
type: 'line',
data: [0,-4.5,-12.5]
,index: 2
},
{
name: 'Professional',
type: 'line',
data: [0,1.7,3.3]
,index: 3
},
{
name: 'Other',
type: 'line',
data: [0,-6.5,-14]
,index: 4
}
]
}
