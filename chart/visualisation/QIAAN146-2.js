/* Created by rreed on 06/07/2017 08:50:18 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has HbA1c target achievement for children with diabetes changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'HbA1c band (mmol/mol)'}
, categories: ['2010/11','2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '<58',
type: 'line',
data: [15.8,17.4,15.8,18.4,23.5,26.6]
,index: 1
},
{
name: '>58 and <=80',
type: 'line',
data: [55.5,56.2,58.4,57.7,null,null]
,index: 2
},
{
name: '>80',
type: 'line',
data: [28.7,26.4,25.8,23.9,21.3,17.9]
,index: 3
}
]
}
