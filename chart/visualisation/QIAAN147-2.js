/* Created by rreed on 06/07/2017 08:50:19 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of all patients with type 1 diabetes receiving recommended care changed over time? '},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010-11','2011-12','2012-13','2013-14','2014-15','2015-16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage'}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'HbA1c',
visible: true,type: 'line',
data: [86,83,79.8,80.9,83.2,83.7]
,index: 1
},
{
name: 'Blood pressure',
visible: false,type: 'line',
data: [88.7,88.4,87.7,87,89,89.1]
,index: 2
},
{
name: 'Cholesterol',
visible: false,type: 'line',
data: [78.8,77.8,77.3,77.4,78.7,79.1]
,index: 3
},
{
name: 'Serum creatinine',
visible: false,type: 'line',
data: [81.2,81.1,80.3,78.8,80.5,81.5]
,index: 4
},
{
name: 'Urine albumin',
visible: false,type: 'line',
data: [58.4,59.2,56.5,63.9,55.9,50.2]
,index: 5
},
{
name: 'Foot surveillance',
visible: false,type: 'line',
data: [71.5,72.8,71.5,70.7,72.4,72.9]
,index: 6
},
{
name: 'BMI',
visible: false,type: 'line',
data: [83.4,83.7,83.3,76.8,74.9,75.2]
,index: 7
},
{
name: 'Smoking',
visible: false,type: 'line',
data: [78.6,79,79.2,77.4,77.9,78.5]
,index: 8
},
{
name: 'Eight care processes',
visible: false,type: 'line',
data: [43.3,43.2,40.8,44.5,38.7,36.5]
,index: 9
}
]
}
