/* Created by EFisher on 12/10/2015 14:28:52 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How strongly do seasons influence breaches?'},
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
title: {text:'Major A&E four-hour target achievement'}
, max: 100
, min: 50
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2011',
type: 'line',
data: [90,93.5,95.8,96.2,95.6,95.2,95.4,96.1,96.1,95.2,95.1,95.3,94.5,94.6,95.3,95.7,96.1,95.1,95.6,95.8,95.9,95.4,95.6,95.7,95.8,95.7,96.1,96.7,96.7,96.3,95.4,96.2,96.4,96.6,95.7,95.4,95.5,95.6,94.3,94.6,95,95.6,94.6,94.2,95.3,95.5,94.6,94.4,93.4,92.1,95.1,94.1]
,index: 1
},
{
name: '2012',
type: 'line',
data: [91.9,93.8,94.5,93.8,94.6,93.1,91,91.7,93.3,94.8,95.3,94.7,95.3,95.2,92.9,94.4,95.2,95.5,95,95.5,94.8,95.1,95.3,94.7,95.3,94.8,95.1,95.7,95.9,95.6,95.8,95.8,94.6,95.5,96.2,95.4,95,95.3,94.2,94.1,94.7,93.8,94.9,94.6,94.1,94.1,94.1,93.7,92.4,91,91.4,93.3]
,index: 2
},
{
name: '2013',
type: 'line',
data: [89.5,92,93.8,92.4,91.4,92.2,91.2,91.8,90.2,89.1,90.2,90,91.8,88,87.4,90.2,93.4,94.8,94.5,94.7,95.1,95.2,95.2,95.2,95,96.1,95.3,95.5,94.9,94.3,94.9,94.6,94.3,94.2,93.8,93.9,94.9,92.9,92.9,93.2,93.8,93.4,92.9,94.6,94,94.1,93.6,93.5,92.2,92.1,93.2,94.6]
,index: 3
},
{
name: '2014',
type: 'line',
data: [91.5,91.7,93.1,94.1,92.9,91.4,91.5,92.4,92.1,92.5,94.3,93.7,93.6,91.5,93,94.7,92.1,92.5,92.2,92.3,91.9,92.2,91.6,92.7,93.6,93.4,92.8,93.1,92.3,92.5,93.4,92.6,93.1,93.4,91.3,90.9,92.3,92,92.7,91.8,90.8,89.6,90.6,90.6,90.2,89.4,90.8,90.4,87.7,84.7,83.1,85.7]
,index: 4
},
{
name: '2015',
type: 'line',
data: [79.8,84.3,88.4,89.4,88.3,89.1,87.1,87.7,87,89,89.7,89.6,87.8,88.4,88.5,88.5,89.8,91.4,91.1,90,91.3,92.7,91.9,91.1,92.5,92.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 5
}
]
}
