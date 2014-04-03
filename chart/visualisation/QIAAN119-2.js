/* Created by EFisher on 26/03/2014 17:18:44 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are patients\' overall experiences of NHS dentistry care?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','Jan 2013 - Sept 2013']
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
data: [46.9,47.6,47.5]
,index: 4
},
{
name: 'Fairly good',
type: 'column',
data: [36.5,36.3,36.3]
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
data: [4.3,4.1,4.2]
,index: 1
},
{
name: 'Very poor',
type: 'column',
data: [3.2,3.1,3.2]
,index: 0
}
]
}
