/* Created by ianb on 04/11/2014 12:54:09 using v2.2 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do outpatients feel they were given enough information about their treatment or condition?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2009,2011]
, labels: {
}
},
yAxis: {
title: {text:' How much information about your <br> condition or treatment was given <br> to you? (Proportion of outpatients)', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Not enough',
type: 'column',
data: [12,12,11,11]
,index: 3
},
{
name: 'Right amount',
type: 'column',
data: [80,80,82,83]
,index: 2
},
{
name: 'Too much',
type: 'column',
data: [0,0,0,0]
,index: 1
},
{
name: 'I was not given any information about my treatment or condition',
type: 'column',
data: [7,8,6,6]
,index: 0
}
]
}
