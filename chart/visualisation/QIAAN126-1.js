/* Created by NCODowd on 07/07/2016 12:48:07 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Who employs the adult social care workforce?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of jobs across sector'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'CASSR (local authority)',
type: 'column',
data: [1100,1000,900,800]
,index: 4
},
{
name: 'Private',
type: 'column',
data: [5800,5800,5700,5700]
,index: 3
},
{
name: 'Voluntary',
type: 'column',
data: [1700,1800,1900,2000]
,index: 2
},
{
name: 'NHS',
type: 'column',
data: [500,500,500,600]
,index: 1
},
{
name: 'Jobs for direct payment recipients',
type: 'column',
data: [900,900,900,900]
,index: 0
}
]
}
