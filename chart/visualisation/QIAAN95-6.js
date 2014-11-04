/* Created by ianb on 04/11/2014 13:01:11 using v2.2 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do outpatients report having their appointment date changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2009,2011]
, labels: {
}
},
yAxis: {
title: {text:'Was your appointment changed to <br> a later date by the hospital? (proportion <br> of outpatients)', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'No',
type: 'column',
data: [79,79,77]
,index: 3
},
{
name: 'Yes, once',
type: 'column',
data: [16,17,18]
,index: 2
},
{
name: 'Yes, 2 or 3 times',
type: 'column',
data: [4,4,5]
,index: 1
},
{
name: 'Yes, 4 times or more',
type: 'column',
data: [0,0,0]
,index: 0
}
]
}
