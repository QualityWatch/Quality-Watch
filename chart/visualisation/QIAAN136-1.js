/* Created by ianb on 01/10/2014 12:10:19 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of people have their first outpatient appointment within 18 weeks?'},
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
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'All specialties',
type: 'line',
data: [97,96.91,96.49,96.25,95.14]
,index: 1
},
{
name: 'Trauma and orthopaedics ',
type: 'line',
data: [97.98,98.09,97.85,97.72,97.25]
,index: 2
},
{
name: 'Ophthalmology ',
type: 'line',
data: [97.23,96.58,95.79,95.4,95.39]
,index: 3
},
{
name: 'General surgery ',
type: 'line',
data: [98.31,98.19,97.99,97.98,97.48]
,index: 4
},
{
name: 'Allied health professional episode ',
type: 'line',
data: [94.34,95.93,95.51,95.66,94.77]
,index: 5
}
]
}
