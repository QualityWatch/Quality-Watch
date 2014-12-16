/* Created by ianb on 16/12/2014 11:18:36 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of inpatients warned about medication side effects to watch for on discharge changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of respondents'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, completely',
type: 'column',
data: [40,37,36,38,36,37,38,38,39]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [18,18,18,18,18,19,19,19,19]
,index: 1
},
{
name: 'No',
type: 'column',
data: [42,45,46,44,45,44,43,43,42]
,index: 0
}
]
}
