/* Created by ianb on 29/05/2014 14:46:30 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the annual pattern of breaches changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['January','January','January','January','February','February','February','February','March','March','March','March','March','April','April','April','April','May','May','May','May','June','June','June','June','June','July','July','July','July','August','August','August','August','September','September','September','September','September','October','October','October','October','November','November','November','November','December','December','December','December','December']
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
