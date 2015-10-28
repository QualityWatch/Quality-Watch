/* Created by EFisher on 26/10/2015 10:08:30 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Distribution of adult social service jobs by service group'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of jobs'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Residential',
type: 'column',
data: [2390.2,2225.9,2183.8,2328.7]
,index: 4
},
{
name: 'Day',
type: 'column',
data: [1022.6,980.6,1089.2,1017.1]
,index: 3
},
{
name: 'Domiciliary (home care)',
type: 'column',
data: [1449.2,1269.1,1410.4,1365]
,index: 2
},
{
name: 'Community',
type: 'column',
data: [3174.4,3492.5,3268.4,3317.8]
,index: 1
},
{
name: 'Other',
type: 'column',
data: [1963.6,2031.8,2048.2,1971.4]
,index: 0
}
]
}
