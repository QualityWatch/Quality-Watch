/* Created by ianb on 01/10/2014 12:10:25 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do patients wait longer for mental health first outpatient appointments?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients having first <br> outpatient appointment who waited <br> fewer than 18 weeks', offset: 99}
, max: 100
, min: 40
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Mental health',
type: 'line',
data: [76.9,79.85,83.14,77.75,73.9]
,index: 1
},
{
name: 'Physical health',
visible: false,type: 'line',
data: [97.36,97.16,96.71,96.56,95.49]
,index: 2
},
{
name: 'Learning disability',
visible: false,type: 'line',
data: [51.12,64.59,66.94,45.41,52.45]
,index: 3
},
{
name: 'Adult mental illness ',
visible: false,type: 'line',
data: [76.31,78.32,82.2,81.48,75]
,index: 4
},
{
name: 'Child and adolescent psychiatry ',
visible: false,type: 'line',
data: [81.3,83.95,85.91,68.36,72.16]
,index: 5
},
{
name: 'Forensic psychiatry ',
visible: false,type: 'line',
data: [81.58,86.26,83.38,64.33,53.9]
,index: 6
},
{
name: 'Psychotherapy ',
visible: false,type: 'line',
data: [86.84,83.52,87.33,74.97,65.13]
,index: 7
},
{
name: 'Old age psychiatry ',
visible: false,type: 'line',
data: [78.28,81.24,83.81,79.84,77.24]
,index: 8
}
]
}
