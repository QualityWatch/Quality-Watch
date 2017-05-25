/* Created by rreed on 25/05/2017 13:35:21 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about support from their managers and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,2012,2013,2014,'2015*','2016*']
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted average (mean score) <br> staff rating the support from immediate <br> manager (± SEM)*= weighted scores', offset: 99}
, max: 5
, labels: {
}},
series:[
{
name: 'England',
type: 'column',
data: [3.63,3.64,3.67,3.69,3.68,3.65,3.69,3.74,3.72,3.76]
,index: 1
},
{
name: 'Acute',
type: 'column',
data: [3.57,3.57,3.61,3.61,3.62,3.61,3.65,3.66,3.7,3.73]
,index: 2
},
{
name: 'Ambulance',
type: 'column',
data: [3.12,3.17,3.19,3.25,3.24,3.26,3.24,3.29,3.38,3.43]
,index: 3
},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [3.74,3.73,3.77,3.8,3.79,3.78,3.81,3.81,3.86,3.89]
,index: 4
},
{
name: 'Community',
type: 'column',
data: [null,null,null,null,3.73,3.7,3.71,3.76,3.8,3.83]
,index: 5
}
]
}
