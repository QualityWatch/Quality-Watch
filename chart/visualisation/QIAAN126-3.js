/* Created by rreed on 25/05/2017 13:34:40 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Distribution of adult social service jobs by service group'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013,2014,2015,2016]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of jobs  in adult social <br> care in England', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Residential',
type: 'column',
data: [23.9,22.2,21.8,23.3,22,16.4]
,index: 4
},
{
name: 'Day',
type: 'column',
data: [10.2,9.8,10.9,10.1,9.4,8.5]
,index: 3
},
{
name: 'Domiciliary',
type: 'column',
data: [14.5,12.7,14.1,13.7,13.6,18.3]
,index: 2
},
{
name: 'Community',
type: 'column',
data: [31.7,34.9,32.7,33.2,34.2,35.3]
,index: 1
},
{
name: 'Other',
type: 'column',
data: [19.6,20.3,20.5,19.8,20.6,21.4]
,index: 0
}
]
}
