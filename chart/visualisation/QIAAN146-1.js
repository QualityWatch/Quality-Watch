/* Created by rreed on 06/07/2017 08:50:17 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of children and young people with diabetes receiving recommended care processes changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2004/5','2005/6','2006/7','2007/8','2008/9','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of children having specific <br> care processes (%)', offset: 87}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'HbA1c',
visible: true,type: 'line',
data: [73.2,77.6,84.7,89.1,89.6,90.1,92.8,89.3,97.6,98.3,98.7,97.3]
,index: 1
},
{
name: 'BMI',
visible: false,type: 'line',
data: [50.5,53,60.5,73.2,66,70.2,75.3,64.7,87.9,94,94.2,94.4]
,index: 2
},
{
name: 'Blood pressure',
visible: false,type: 'line',
data: [44.1,40.6,53.3,60.1,57.1,58.8,62.7,67.7,77.3,80.2,82.9,85]
,index: 3
},
{
name: 'Urinary Albumin',
visible: false,type: 'line',
data: [18.7,23.3,30.3,34.1,32.2,36.5,40.3,40.7,49.5,48.8,52.4,51.7]
,index: 4
},
{
name: 'Cholesterol',
visible: false,type: 'line',
data: [18.2,17.5,22.6,32.1,30.5,29.9,34.9,44.4,52.7,54.2,60.8,59.2]
,index: 5
},
{
name: 'Eye screening',
visible: false,type: 'line',
data: [17.7,15.3,25.2,25.7,26.9,25.8,35.8,36.9,49.7,51.9,64.9,47.2]
,index: 6
},
{
name: 'Foot exam',
visible: false,type: 'line',
data: [17.4,15.4,21.3,23.5,23.1,24.5,31.9,34.4,39.5,45.7,55.4,50]
,index: 7
},
{
name: 'Age 12+
with all care processes recorded',
visible: false,type: 'line',
data: [2,2.6,3.6,5,5.2,4.1,5.8,6.7,12.1,16.1,16.1,16.7]
,index: 8
}
]
}
