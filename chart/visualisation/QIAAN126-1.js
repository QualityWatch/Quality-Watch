/* Created by ianb on 07/05/2014 13:25:58 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Who employs the adult social care workforce?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012]
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
data: [10.2,9.2]
,index: 4
},
{
name: 'Private',
type: 'column',
data: [53.1,53.8]
,index: 3
},
{
name: 'Voluntary',
type: 'column',
data: [17.7,17.9]
,index: 2
},
{
name: 'NHS',
type: 'column',
data: [4.8,4.7]
,index: 1
},
{
name: 'Direct payment recipients',
type: 'column',
data: [14.3,14.4]
,index: 0
}
]
}
