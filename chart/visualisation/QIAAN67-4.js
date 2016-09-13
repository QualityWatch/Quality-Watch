/* Created by NCODowd on 13/09/2016 11:04:57 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have discharge procedures and ongoing care changed for stroke?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2013/14','2014/15','2015/16']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of applicable patients'}
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of applicable patients who have a continence plan drawn up within 3 weeks of clock start ',
type: 'line',
data: [75.2,84.8,89.3]
,index: 1
},
{
name: 'Proportion of applicable patients who have mood and cognition screening by discharge ',
type: 'line',
data: [78.6,86,89.3]
,index: 2
}
]
}
