/* Created by NCODowd on 07/07/2016 12:48:18 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How strongly do seasons influence breaches?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['April','May','June','July','August','September','October','November','December','January','February','March']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of patients from arrival <br> either admitted, transferred or <br> discharged within 4 hours (type <br> 1)', offset: 111}
, max: 100
, min: 70
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: '2010/11',
visible: true,type: 'line',
data: [null,null,null,null,97.1,96.5,96,95.9,92.4,93.7,95.6,95.3]
,index: 1
},
{
name: '2011/12',
visible: false,type: 'line',
data: [95.3,95.6,95.6,96.4,96.1,95.3,94.9,94.9,93.7,93.6,92.5,94.8]
,index: 2
},
{
name: '2012/13',
visible: false,type: 'line',
data: [94.5,95.2,95.1,95.6,95.5,95.1,94.4,94.1,92,91.9,91.4,90.3]
,index: 3
},
{
name: '2013/14',
visible: false,type: 'line',
data: [90.1,94.8,95.4,95,94.3,93.6,93.5,93.9,92.9,92.7,91.9,93.4]
,index: 4
},
{
name: '2014/15',
visible: false,type: 'line',
data: [92.8,92.2,92.8,92.7,92.7,92,90.6,90.2,84.8,86.5,87.8,88.9]
,index: 5
},
{
name: '2015/16',
visible: false,type: 'line',
data: [89.8,91.4,92.3,92.5,91.4,90.2,88.6,87,86.6,83,81.6,80.9]
,index: 6
},
{
name: '2016/17',
visible: false,type: 'line',
data: [85,null,null,null,null,null,null,null,null,null,null,null]
,index: 7
}
]
}
