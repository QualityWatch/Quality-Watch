/* Created by ianb on 27/06/2014 16:14:49 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the annual pattern of breaches changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Week 1 (Jan)','Week 2 (Jan)','Week 3 (Jan)','Week 4 (Jan)','Week 5 (Feb)','Week 6 (Feb)','Week 7 (Feb)','Week 8 (Feb)','Week 9 (Mar)','Week 10 (Mar)','Week 11 (Mar)','Week 12 (Mar)','Week 13 (Mar)','Week 14 (Apr)','Week 15 (Apr)','Week 16 (Apr)','Week 17 (Apr)','Week 18 (May)','Week 19 (May)','Week 20 (May)','Week 21 (May)','Week 22 (Jun)','Week 23 (Jun)','Week 24 (Jun)','Week 25 (Jun)','Week 26 (Jun)','Week 27 (Jul)','Week 28 (Jul)','Week 29 (Jul)','Week 30 (Jul)','Week 31 (Aug)','Week 32 (Aug)','Week 33 (Aug)','Week 34 (Aug)','Week 35 (Sep)','Week 36 (Sep)','Week 37 (Sep)','Week 38 (Sep)','Week 39 (Sep)','Week 40 (Oct)','Week 41 (Oct)','Week 42 (Oct)','Week 43 (Oct)','Week 44 (Nov)','Week 45 (Nov)','Week 46 (Nov)','Week 47 (Nov)','Week 48 (Dec)','Week 49 (Dec)','Week 50 (Dec)','Week 51 (Dec)','Week 52 (Dec)']
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
data: [5,5.1,3.9,3.1,3.8,5.1,5.2,3.8,4.5,3.9,2.6,3,2.9,4.5,3.3,2.2,4.1,3.5,3.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 4
}
]
}
