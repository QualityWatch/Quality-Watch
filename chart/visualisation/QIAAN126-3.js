/* Created by EFisher on 26/10/2015 10:08:30 using v2.7 */
{
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
data: [23.902,22.259,21.838,23.287]
,index: 4
},
{
name: 'Day',
type: 'column',
data: [10.226,9.806,10.892,10.171]
    ,index: 3
},
{
name: 'Domiciliary (home care)',
type: 'column',
data: [14.492,12.691,14.104,13.65]
,index: 2
},
{
name: 'Community',
type: 'column',
data: [31.744,34.925,32.684,33.178]
,index: 1
},
{
name: 'Other',
type: 'column',
data: [19.636,20.318,20.482,19.714]
,index: 0
}
]
}
