/* Created by EFisher on 25/02/2014 18:18:10 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the annual pattern of breaches changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10','Week 11','Week 12','Week 13','Week 14','Week 15','Week 16','Week 17','Week 18','Week 19','Week 20','Week 21','Week 22','Week 23','Week 24','Week 25','Week 26','Week 27','Week 28','Week 29','Week 30','Week 31','Week 32','Week 33','Week 34','Week 35','Week 36','Week 37','Week 38','Week 39','Week 40','Week 41','Week 42','Week 43','Week 44','Week 45','Week 46','Week 47','Week 48','Week 49','Week 50','Week 51','Week 52']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Proportion of patients not placed <br> in a bed in a ward within four hours <br> of a decision to admit', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2011',
type: 'line',
data: [5.1,3,1.8,1.7,1.9,2.3,2.2,1.5,1.6,1.9,2,2,2.2,2.2,1.7,1.6,1.4,2,1.6,1.5,1.7,1.8,1.8,1.8,1.6,1.6,1.6,1.2,1,1.3,1.5,1.1,1,1,1.6,2,1.8,1.6,2.1,2.3,2.2,1.7,2.1,2.7,1.9,1.7,2.1,2.2,2.8,3.1,2,2.1]
,index: 1
},
{
name: '2012',
type: 'line',
data: [4.4,3.2,2.8,2.9,2.6,3.6,4.4,4,3.5,2.4,1.8,2.1,1.9,1.9,3.2,2.5,2.2,1.7,2,2,2.2,1.7,2,2.1,2,1.9,1.8,1.6,1.5,1.6,1.5,1.7,1.9,1.7,1.6,1.8,2.2,2,2.7,2.7,2.5,2.6,2.2,2.2,2.8,2.7,2.6,2.9,3.7,4.1,3.8,2.9]
,index: 2
},
{
name: '2013',
type: 'line',
data: [5.8,4.7,3.2,4.3,4.8,4.3,4.5,4.5,5.8,6.1,5.8,5.4,4,6.9,7.1,5.4,3.5,2.1,2.3,2.3,2.2,2.1,2.1,2.1,2.4,1.4,1.7,2,2,2.6,2.3,2.3,2.2,2.5,2.9,3.1,2.3,3.5,3.6,3.4,3,3.2,3.3,2.1,2.5,2.5,3.1,2.9,3.5,3.8,3.3,2.1]
,index: 3
},
{
name: '2014',
type: 'line',
data: [5,5.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 4
}
]
}
