/* Created by ianb on 08/10/2013 13:47:03 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the pattern of breaches changed between years?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10','Week 11','Week 12','Week 13','Week 14','Week 15','Week 16','Week 17','Week 18','Week 19','Week 20','Week 21','Week 22','Week 23','Week 24','Week 25','Week 26','Week 27','Week 28','Week 29','Week 30','Week 31','Week 32','Week 33','Week 34','Week 35']
, labels: {
 rotation: -90
, step: 1
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
data: [5.1,3,1.8,1.7,1.9,2.3,2.2,1.5,1.6,1.9,2,2,2.2,2.2,1.7,1.6,1.4,2,1.6,1.5,1.7,1.8,1.8,1.8,1.6,1.6,1.6,1.2,1,1.3,1.5,1.1,1,1,1.6]
,index: 1
},
{
name: '2012',
type: 'line',
data: [4.4,3.2,2.8,2.9,2.6,3.6,4.4,4,3.5,2.4,1.8,2.1,1.9,1.9,3.2,2.5,2.1,1.7,2,2,2.2,1.7,1.9,2.1,2,1.9,1.8,1.5,1.5,1.6,1.5,1.7,1.9,1.7,1.6]
,index: 2
},
{
name: '2013',
type: 'line',
data: [5.8,4.7,3.2,4.3,4.8,4.3,4.5,4.5,5.8,6.1,5.8,5.4,4,6.9,7.1,5.4,3.5,2.1,2.3,2.3,2.2,2.1,2.1,2.1,2.4,1.4,1.7,2,2,2.6,2.3,2.3,2.2,2.5,2.9]
,index: 3
}
]
}
