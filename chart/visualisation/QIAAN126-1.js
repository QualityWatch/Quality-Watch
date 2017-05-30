/* Created by NCODowd on 07/07/2016 12:48:07 using v2.7 */
{
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
data: [11,10,9,8]
,index: 4
},
{
name: 'Private',
type: 'column',
data: [58,58,57,57]
,index: 3
},
{
name: 'Voluntary',
type: 'column',
data: [17,18,19,20]
,index: 2
},
{
name: 'NHS',
type: 'column',
data: [5,5,5,6]
,index: 1
},
{
name: 'Jobs for direct payment recipients',
type: 'column',
data: [9,9,9,9]
,index: 0
}
]
}
