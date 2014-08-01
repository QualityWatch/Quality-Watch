/* Created by ianb on 01/08/2014 12:47:55 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are patients\' overall experiences of NHS dentistry care?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','July 2013 - March 2014']
, labels: {
}
},
yAxis: {
title: {text:''}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Very good',
type: 'column',
data: [46.9,47.6,48.1]
,index: 4
},
{
name: 'Fairly good',
type: 'column',
data: [36.5,36.3,36]
,index: 3
},
{
name: 'Neither good nor poor',
type: 'column',
data: [9.1,8.9,8.8]
,index: 2
},
{
name: 'Fairly poor',
type: 'column',
data: [4.3,4.1,4]
,index: 1
},
{
name: 'Very poor',
type: 'column',
data: [3.2,3.1,3]
,index: 0
}
]
}
