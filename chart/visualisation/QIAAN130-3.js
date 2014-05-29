/* Created by ianb on 29/05/2014 15:06:53 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has care for people on dialysis changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of renal register patients <br> on dialysis', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'URR>65% (HD)',
type: 'line',
data: [80.28,83.31,85.3,86.3,87.7,88]
,index: 1
},
{
name: 'Haemoglobin 10 to 12 g/dl (HD)',
type: 'line',
data: [46.98,49.51,50.33,52.39,56.01,56.78]
,index: 2
},
{
name: 'Haemoglobin 10 to 12 g/dl (PD)',
type: 'line',
data: [44.41,49.19,48.47,50.02,53.24,54.19]
,index: 3
},
{
name: 'Haemoglobin < 10 g/dl (HD)',
type: 'line',
data: [14.51,14.78,14.85,15.66,18.1,17.92]
,index: 4
},
{
name: 'Haemoglobin < 10 g/dl (PD)',
type: 'line',
data: [9.96,11.65,12.26,13.63,15.46,15.31]
,index: 5
}
]
}
